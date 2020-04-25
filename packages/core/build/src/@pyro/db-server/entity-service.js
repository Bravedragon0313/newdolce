"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("@pyro/db-server/model");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const inversify_1 = require("inversify");
let EntityService = class EntityService {
    get Model() {
        return model_1.getModel(this.DBObject);
    }
    getObjectId(id) {
        return new mongoose_1.default.Types.ObjectId(id);
    }
    parse(obj) {
        if (obj == null) {
            return null;
        }
        else {
            return new this.DBObject(obj);
        }
    }
};
EntityService = tslib_1.__decorate([
    inversify_1.injectable()
], EntityService);
exports.EntityService = EntityService;
//# sourceMappingURL=entity-service.js.map