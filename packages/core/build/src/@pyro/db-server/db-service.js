"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const rxjs_1 = require("rxjs");
const inversify_1 = require("inversify");
const existence_1 = require("./existence");
const from_1 = require("rxjs/observable/from");
const operators_1 = require("rxjs/operators");
const of_1 = require("rxjs/observable/of");
const uuid_1 = require("uuid");
const entity_service_1 = require("@pyro/db-server/entity-service");
let DBService = class DBService extends entity_service_1.EntityService {
    constructor() {
        super();
        this.existence = new rxjs_1.Subject();
    }
    get(id) {
        const callId = uuid_1.v1();
        this.log.info({ objectId: id, callId }, '.get(id) called');
        return from_1.from(this.getCurrent(id)).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((existenceEvent) => id === existenceEvent.id), operators_1.map((existenceEvent) => existenceEvent.value), operators_1.share())), operators_1.tap({
            next: (obj) => {
                this.log.info({
                    objectId: id,
                    object: obj,
                    callId,
                }, '.get(id) emitted next value');
            },
            error: (err) => {
                this.log.error({
                    objectId: id,
                    err,
                    callId,
                }, '.get(id), emitted error!');
            },
        }));
    }
    getCurrent(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ objectId: id, callId }, '.getCurrent(id) called');
            const obj = yield this.Model.findById(id).lean().exec();
            return this.parse(obj);
        });
    }
    getMultiple(ids) {
        const callId = uuid_1.v1();
        this.log.info({ objectIds: ids, callId }, '.getMultiple(ids) called');
        return of_1.of(null).pipe(operators_1.concat(this.existence.pipe(operators_1.filter((event) => lodash_1.default.includes(ids, event.id)), operators_1.share())), operators_1.exhaustMap(() => this.getCurrentMultiple(ids)), operators_1.tap({
            next: (objects) => {
                this.log.info({ objectIds: ids, objects, callId }, '.getMultiple(ids) emitted next value');
            },
            error: (err) => {
                this.log.error({ objectIds: ids, err, callId }, '.getMultiple(ids), emitted error!');
            },
        }));
    }
    getCurrentMultiple(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ objectIds: ids, callId }, '.getCurrentMultiple(ids) called');
            const objs = yield this.Model.find({
                _id: {
                    $in: lodash_1.default.map(ids, (id) => this.getObjectId(id)),
                },
            })
                .lean()
                .exec();
            return lodash_1.default.map(objs, (obj) => this.parse(obj));
        });
    }
    create(createObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, createObject }, '.create(createObject) called');
            let object;
            try {
                const document = yield this.Model.create(createObject);
                object = this.parse(document.toObject());
            }
            catch (error) {
                this.log.error({ callId, createObject, error }, '.create(createObject) thrown error!');
                throw error;
            }
            this.existence.next({
                id: object.id,
                value: object,
                lastValue: null,
                type: existence_1.ExistenceEventType.Created,
            });
            this.log.info({ callId, createObject, object }, '.create(createObject) created object');
            return object;
        });
    }
    removeAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId }, '.removeAll() called!');
            try {
                yield this.Model.remove({}).exec();
            }
            catch (err) {
                this.log.error({ callId, err }, '.removeAll() thrown error!');
                throw err;
            }
            this.log.info({ callId }, '.removeAll() removed all!');
        });
    }
    remove(objectId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, objectId }, '.remove(objectId) called');
            let lastValue;
            try {
                const lastValueRaw = (yield this.Model.findByIdAndRemove(objectId)
                    .lean()
                    .exec());
                lastValue = this.parse(lastValueRaw);
            }
            catch (err) {
                this.log.error({ callId, objectId, err }, '.remove(objectId) thrown error!');
                throw err;
            }
            if (lastValue == null) {
                throw new Error(".remove(objectId) error - Object don't exist");
            }
            else {
                this.existence.next({
                    id: objectId,
                    value: null,
                    lastValue,
                    type: existence_1.ExistenceEventType.Removed,
                });
                this.log.info({ callId, objectId, lastValue }, '.remove(objectId) removed object');
            }
        });
    }
    removeMultiple(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.removeMultiple(conditions) called');
            let lastValues;
            try {
                lastValues = yield this.find(conditions);
                yield this.Model.deleteMany({
                    _id: { $in: lastValues.map((o) => this.getObjectId(o.id)) },
                }).exec();
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.removeMultiple(conditions) thrown error!');
                throw err;
            }
            lodash_1.default.each(lastValues, (lastValue) => {
                this.existence.next({
                    id: lastValue.id,
                    lastValue,
                    value: null,
                    type: existence_1.ExistenceEventType.Removed,
                });
            });
            this.log.info({
                callId,
                conditions,
                lastValues,
            }, '.removeMultiple(conditions) removed objects');
        });
    }
    removeMultipleByIds(ids) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.Model.update({
                _id: { $in: ids.map((id) => this.getObjectId(id)) },
            }, { isDeleted: true }, { multi: true }).exec();
        });
    }
    find(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.find(conditions) called');
            let results;
            try {
                const documents = (yield this.Model.find(conditions == null ? {} : conditions)
                    .lean()
                    .exec());
                results = lodash_1.default.map(documents, (obj) => this.parse(obj));
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.find(conditions) thrown error!');
                throw err;
            }
            this.log.info({ callId, conditions, results }, '.find(conditions) found results');
            return results;
        });
    }
    findOne(conditions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, conditions }, '.findOne(conditions) called');
            let result;
            try {
                const obj = (yield this.Model.findOne(conditions)
                    .lean()
                    .exec());
                result = this.parse(obj);
            }
            catch (err) {
                this.log.error({ callId, conditions, err }, '.findOne(conditions) thrown error!');
                throw err;
            }
            this.log.info({ callId, conditions, result }, '.findOne(conditions) found result');
            return result;
        });
    }
    update(objectId, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, objectId, updateObj }, '.update(objectId, updateObj) called');
            let beforeUpdateObject;
            let updatedObject;
            try {
                beforeUpdateObject = yield this.getCurrent(objectId);
                if (beforeUpdateObject != null) {
                    const obj = (yield this.Model.findByIdAndUpdate(objectId, updateObj, { new: true })
                        .lean()
                        .exec());
                    updatedObject = this.parse(obj);
                }
                else {
                    throw new Error(`There is no such object with the id ${beforeUpdateObject}`);
                }
            }
            catch (err) {
                this.log.error({ callId, objectId, updateObj, err }, '.update(objectId, updateObj) thrown error!');
                throw err;
            }
            this.existence.next({
                id: objectId,
                value: updatedObject,
                lastValue: beforeUpdateObject,
                type: existence_1.ExistenceEventType.Updated,
            });
            this.log.info({
                callId,
                objectId,
                updateObj,
                updatedValue: updatedObject,
                lastValue: beforeUpdateObject,
            }, '.update(objectId, updateObj) updated object');
            return updatedObject;
        });
    }
    updateMultiple(findObj, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, findObj, updateObj }, '.updateMultiple(findObj, updateObj) called');
            let lastValues;
            let updatedObjects;
            try {
                lastValues = yield this.find(findObj);
                yield this.Model.updateMany(findObj, updateObj, {
                    new: true,
                }).exec();
                updatedObjects = yield this.getCurrentMultiple(lodash_1.default.map(lastValues, (value) => value.id));
            }
            catch (err) {
                this.log.error({ callId, findObj, updateObj, err }, '.updateMultiple(findObj, updateObj) thrown error!');
                throw err;
            }
            lodash_1.default.each(lastValues, (lastValue) => {
                const newValue = lodash_1.default.find(updatedObjects, (obj) => obj.id === lastValue.id);
                this.existence.next({
                    id: lastValue.id,
                    lastValue,
                    value: newValue,
                    type: existence_1.ExistenceEventType.Updated,
                });
            });
            this.log.info({
                callId,
                findObj,
                updateObj,
                lastValues,
                updatedObjects,
            }, '.updateMultiple(objectId, updateObj) updated objects');
            return updatedObjects;
        });
    }
    updateMultipleByIds(ids, updateObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, ids, updateObj }, '.updateMultipleByIds(ids, updateObj) called');
            let updatedObjects;
            try {
                updatedObjects = yield this.updateMultiple({
                    _id: {
                        $in: lodash_1.default.map(ids, (id) => new mongoose_1.default.Types.ObjectId(id)),
                    },
                }, updateObj);
            }
            catch (err) {
                this.log.error({ callId, ids, updateObj, err }, '.updateMultipleByIds(ids, updateObj) thrown error!');
                throw err;
            }
            this.log.info({
                callId,
                ids,
                updateObj,
                updatedObjects,
            }, '.updateMultipleByIds(ids, updateObj) updated objects');
            return updatedObjects;
        });
    }
    count(findObj) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const callId = uuid_1.v1();
            this.log.info({ callId, findObj }, '.countDocuments(findObj) called');
            let count;
            try {
                count = (yield this.Model.countDocuments(findObj).exec());
            }
            catch (err) {
                this.log.error({ callId, findObj, err }, '.countDocuments(findObj) thrown error!');
                throw err;
            }
            this.log.info({ callId, findObj, count }, '.countDocuments(findObj) counted objects');
            return count;
        });
    }
    findAll(selectFields = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.Model.find({}).select(selectFields).lean().exec();
        });
    }
};
DBService = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], DBService);
exports.DBService = DBService;
//# sourceMappingURL=db-service.js.map