"use strict";
var ServicesApp_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const https_1 = tslib_1.__importDefault(require("https"));
const http_1 = tslib_1.__importDefault(require("http"));
const path_1 = tslib_1.__importDefault(require("path"));
const pem_1 = tslib_1.__importDefault(require("pem"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const method_override_1 = tslib_1.__importDefault(require("method-override"));
const errorhandler_1 = tslib_1.__importDefault(require("errorhandler"));
const socket_io_1 = tslib_1.__importDefault(require("socket.io"));
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const express_handlebars_1 = tslib_1.__importDefault(require("express-handlebars"));
const Log_1 = require("../helpers/Log");
const IService_1 = require("./IService");
const warehouses_1 = require("./warehouses");
const users_1 = require("./users");
const env_1 = require("../env");
const db_server_1 = require("@pyro/db-server");
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
const admins_1 = require("./admins");
const ipstack = require("ipstack");
const requestIp = require("request-ip");
const typeorm_1 = require("typeorm");
const utils_1 = require("@modules/server.common/utils");
const Admin_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Admin"));
const Device_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Device"));
const Carrier_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Carrier"));
const Invite_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Invite"));
const InviteRequest_1 = tslib_1.__importDefault(require("@modules/server.common/entities/InviteRequest"));
const Order_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Order"));
const Product_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Product"));
const ProductsCategory_1 = tslib_1.__importDefault(require("@modules/server.common/entities/ProductsCategory"));
const User_1 = tslib_1.__importDefault(require("@modules/server.common/entities/User"));
const Warehouse_1 = tslib_1.__importDefault(require("@modules/server.common/entities/Warehouse"));
const config_service_1 = require("../config/config.service");
const INTERNAL_IPS = ['127.0.0.1', '::1'];
let ServicesApp = ServicesApp_1 = class ServicesApp {
    constructor(services, routersManager, warehousesService, socialStrategiesService, _adminsService, _configService) {
        this.services = services;
        this.routersManager = routersManager;
        this.warehousesService = warehousesService;
        this.socialStrategiesService = socialStrategiesService;
        this._adminsService = _adminsService;
        this.db_server = process.env.DB_ENV || 'primary';
        this.log = Log_1.createEverLogger({ name: 'main' });
        const maxSockets = _configService.Env.MAX_SOCKETS;
        http_1.default.globalAgent.maxSockets = maxSockets;
        https_1.default.globalAgent.maxSockets = maxSockets;
        process
            .on('SIGINT', this._gracefulExit)
            .on('SIGTERM', this._gracefulExit);
    }
    start(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.callback = callback;
            yield this._connectDB();
        });
    }
    static getEntities() {
        const entities = [
            Admin_1.default,
            Carrier_1.default,
            Device_1.default,
            Invite_1.default,
            InviteRequest_1.default,
            Order_1.default,
            Product_1.default,
            ProductsCategory_1.default,
            User_1.default,
            Warehouse_1.default,
        ];
        return entities;
    }
    static CreateTypeORMConnection() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const typeORMLog = Log_1.createEverLogger({ name: 'TypeORM' });
            const entities = ServicesApp_1.getEntities();
            const conn = yield typeorm_1.createConnection({
                name: 'typeorm',
                type: 'mongodb',
                url: env_1.env.DB_URI,
                entities,
                synchronize: true,
                useNewUrlParser: true,
                autoReconnect: true,
                reconnectTries: Number.MAX_VALUE,
                poolSize: ServicesApp_1._poolSize,
                connectTimeoutMS: ServicesApp_1._connectTimeoutMS,
                logging: true,
                useUnifiedTopology: true,
            });
            console.log(`TypeORM DB connection created. DB connected: ${conn.isConnected}`);
            typeORMLog.info(`TypeORM DB connection created. DB connected: ${conn.isConnected}`);
            return conn;
        });
    }
    _gracefulExit() {
        try {
            if (this.db != null) {
                this.db.close(() => {
                    this.log.info('Mongoose default connection with DB :' +
                        this.db_server +
                        ' is disconnected through app termination');
                    process.exit(0);
                });
            }
        }
        catch (err) {
            process.exit(0);
        }
    }
    _connectDB() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const connectionOptions = {
                    useCreateIndex: true,
                    useNewUrlParser: true,
                    autoReconnect: true,
                    useFindAndModify: false,
                    reconnectTries: Number.MAX_VALUE,
                    poolSize: ServicesApp_1._poolSize,
                    connectTimeoutMS: ServicesApp_1._connectTimeoutMS,
                    useUnifiedTopology: true,
                };
                const mongoConnect = yield mongoose_1.default.connect(env_1.env.DB_URI, connectionOptions);
                this.db = mongoConnect.connection;
                this._configDBEvents();
                this._onDBConnect();
            }
            catch (err) {
                this.log.error(err, 'Sever initialization failed! Cannot connect to DB');
            }
        });
    }
    _configDBEvents() {
        this.db.on('error', (err) => this.log.error(err));
        this.db.on('disconnected', () => {
            this.log.warn('Mongoose default connection to DB :' +
                this.db_server +
                ' disconnected');
        });
        this.db.on('connected', () => {
            this.log.info('Mongoose default connection to DB :' +
                this.db_server +
                ' connected');
        });
    }
    _onDBConnect() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Connected to DB');
            this.log.info({ db: this.db_server }, 'Connected to DB');
            yield this._registerModels();
            yield this._registerEntityAdministrator();
            this._passportSetup();
            yield this._startExpress();
            yield this._startSocketIO();
            yield this.callback();
            yield this.reportMemoryUsage();
        });
    }
    reportMemoryUsage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Memory usage: ');
            console.log(process.memoryUsage());
        });
    }
    _registerEntityAdministrator() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const adminEmail = 'admin@ever.co';
            const adminPassword = 'admin';
            const adminCollectionCount = yield this._adminsService.count({
                email: adminEmail,
            });
            if (adminCollectionCount === 0) {
                this._adminsService.register({
                    admin: {
                        email: adminEmail,
                        name: 'Admin',
                        hash: null,
                        pictureUrl: utils_1.getDummyImage(300, 300, 'A'),
                    },
                    password: adminPassword,
                });
            }
        });
    }
    _getBaseUrl(url) {
        if (url) {
            return url.slice(0, url.lastIndexOf('/') + 1).toString();
        }
    }
    _passportSetup() {
        passport_1.default.serializeUser((user, done) => {
            done(null, user);
        });
        passport_1.default.deserializeUser((id, done) => {
        });
        const googleStrategy = this.socialStrategiesService.getGoogleStrategy();
        if (googleStrategy != null) {
            passport_1.default.use(googleStrategy);
        }
        const facebookStrategy = this.socialStrategiesService.getFacebookStrategy();
        if (facebookStrategy != null) {
            passport_1.default.use(facebookStrategy);
        }
    }
    _registerModels() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield bluebird_1.default.map(this.services, (service) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (service.DBObject != null) {
                    yield db_server_1.getModel(service.DBObject).createIndexes();
                }
            }));
        });
    }
    _startExpress() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.expressApp = express_1.default();
            const hbs = express_handlebars_1.default.create({
                extname: '.hbs',
                defaultLayout: 'main',
                layoutsDir: path_1.default.join('res', 'views', 'layouts'),
                partialsDir: path_1.default.join('res', 'templates'),
            });
            this.expressApp.engine('.hbs', hbs.engine);
            this.expressApp.set('views', path_1.default.join('res', 'views'));
            this.expressApp.set('view engine', '.hbs');
            this.expressApp.set('view cache', false);
            const httpsCertPath = env_1.env.HTTPS_CERT_PATH;
            const httpsKeyPath = env_1.env.HTTPS_KEY_PATH;
            const hasHttpsCert = fs_1.default.existsSync(httpsCertPath);
            const hasHttpsKey = fs_1.default.existsSync(httpsKeyPath);
            let hasDefaultHttpsCert = false;
            if (!hasHttpsCert || !hasHttpsKey) {
                hasDefaultHttpsCert = yield this._getCertificates(httpsCertPath, httpsKeyPath);
            }
            if ((hasHttpsCert && hasHttpsKey) || hasDefaultHttpsCert) {
                this.httpsServer = https_1.default.createServer({
                    cert: fs_1.default.readFileSync(httpsCertPath),
                    key: fs_1.default.readFileSync(httpsKeyPath),
                }, this.expressApp);
            }
            this.httpServer = http_1.default.createServer(this.expressApp);
            const timeout = 30 * 60 * 1000;
            if (this.httpsServer) {
                this.httpsServer.setTimeout(timeout);
            }
            this.httpServer.setTimeout(timeout);
            this.expressApp.set('httpsPort', env_1.env.HTTPSPORT);
            this.expressApp.set('httpPort', env_1.env.HTTPPORT);
            this.expressApp.set('environment', env_1.env.NODE_ENV);
            this.expressApp.use(cors_1.default({
                origin: true,
                credentials: true,
            }));
            this.expressApp.use(body_parser_1.default.urlencoded({ extended: false }));
            this.expressApp.use(body_parser_1.default.json());
            this.expressApp.use(body_parser_1.default.json({ type: 'application/vnd.api+json' }));
            const mo = method_override_1.default;
            this.expressApp.use(mo('X-HTTP-Method'));
            this.expressApp.use(mo('X-HTTP-Method-Override'));
            this.expressApp.use(mo('X-Method-Override'));
            this.expressApp.use(morgan_1.default('dev'));
            this.expressApp.use(passport_1.default.initialize());
            this.expressApp.use(requestIp.mw());
            if (this.expressApp.get('environment') === 'development') {
                const eh = errorhandler_1.default;
                this.expressApp.use(eh());
            }
            this.expressApp.get('/', function (req, res) {
                res.render('index');
            });
            this.expressApp.get('/getLocationByIP', (req, res) => {
                const ipStackKey = env_1.env.IP_STACK_API_KEY;
                if (ipStackKey) {
                    const clientIp = req['clientIp'];
                    if (!INTERNAL_IPS.includes(clientIp)) {
                        ipstack(clientIp, ipStackKey, (err, response) => {
                            res.json({
                                latitude: response.latitude,
                                longitude: response.longitude,
                            });
                        });
                    }
                    else {
                        this.log.info(`Can't use ipstack with internal ip address ${clientIp}`);
                        res.status(204).end();
                    }
                }
                else {
                    this.log.error('Not provided Key for IpStack');
                    res.status(500).end();
                }
            });
            this.expressApp.post('/warehouse/create', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const warehouseCreateObject = JSON.parse(req.body.warehouse);
                const warehouse = yield this.warehousesService.create(warehouseCreateObject);
                res.json(warehouse);
            }));
            this._setupAuthRoutes();
            this._setupStaticRoutes();
            const httpsPort = this.expressApp.get('httpsPort');
            const httpPort = this.expressApp.get('httpPort');
            const conf = require('dotenv').config();
            const environment = this.expressApp.get('environment');
            this.log.info({
                httpsPort,
                httpPort,
                environment,
                'process.env': process.env,
                dotenv: conf,
            }, 'Express server prepare to listen');
            if (httpsPort && httpsPort > 0 && this.httpsServer) {
                this.httpsServer.listen(httpsPort, () => {
                    this.log.info({ port: httpsPort }, 'Express https server listening');
                    console.log(`Express https server listening on port ${httpsPort}`);
                });
            }
            else {
                this.log.warn(`No SSL Certificate exists, HTTPS endpoint will be disabled`);
            }
            if (httpPort && httpPort > 0) {
                this.httpServer.listen(httpPort, () => {
                    this.log.info({ port: httpPort }, 'Express http server listening');
                    console.log(`Express http server listening on port ${httpPort}`);
                });
            }
        });
    }
    _getCertificates(httpsCertPath, httpsKeyPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.log.info('Generating SSL Certificates for HTTPS');
                const { success } = yield this._createCertificateAsync(httpsCertPath, httpsKeyPath);
                this.log.info('Certificates were generated');
                return success;
            }
            catch (error) {
                this.log.warn(`Certificates were not generated due to error: ${error.message}`);
                return false;
            }
        });
    }
    _createCertificateAsync(httpsCertPath, httpsKeyPath) {
        return new Promise((resolve, reject) => {
            try {
                pem_1.default.createCertificate({
                    days: 365,
                    selfSigned: true,
                }, (err, keys) => {
                    if (err) {
                        reject({ success: false, message: err.message });
                        return;
                    }
                    const httpsCertDirPath = path_1.default.dirname(httpsCertPath);
                    const httpsKeyDirPath = path_1.default.dirname(httpsKeyPath);
                    if (!fs_1.default.existsSync(httpsCertDirPath)) {
                        fs_1.default.mkdirSync(httpsCertDirPath, {
                            recursive: true,
                        });
                    }
                    if (!fs_1.default.existsSync(httpsKeyDirPath)) {
                        fs_1.default.mkdirSync(httpsKeyDirPath, {
                            recursive: true,
                        });
                    }
                    fs_1.default.writeFileSync(httpsCertPath, keys.certificate);
                    fs_1.default.writeFileSync(httpsKeyPath, keys.serviceKey);
                    resolve({ success: true });
                });
            }
            catch (err) {
                reject({ success: false, message: err.message });
            }
        });
    }
    _startSocketIO() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const so = socket_io_1.default;
            const ioHttps = so(this.httpsServer);
            const ioHttp = so(this.httpServer);
            yield this.routersManager.startListening(ioHttps);
            yield this.routersManager.startListening(ioHttp);
        });
    }
    _setupStaticRoutes() {
        this.expressApp.get('/en/about', function (req, res) {
            res.render('about_us_en');
        });
        this.expressApp.get('/he/about', function (req, res) {
            res.render('about_us_he');
        });
        this.expressApp.get('/ru/about', function (req, res) {
            res.render('about_us_ru');
        });
        this.expressApp.get('/en/privacy', function (req, res) {
            res.render('privacy_en');
        });
        this.expressApp.get('/he/privacy', function (req, res) {
            res.render('privacy_he');
        });
        this.expressApp.get('/ru/privacy', function (req, res) {
            res.render('privacy_ru');
        });
        this.expressApp.get('/en/terms', function (req, res) {
            res.render('terms_of_use_en');
        });
        this.expressApp.get('/he/terms', function (req, res) {
            res.render('terms_of_use_he');
        });
        this.expressApp.get('/ru/terms', function (req, res) {
            res.render('terms_of_use_ru');
        });
        this.expressApp.get('/bg/terms', function (req, res) {
            res.render('terms_of_use_bg');
        });
    }
    _setupAuthRoutes() {
        this.expressApp.get('/auth/facebook', (req, res, next) => {
            passport_1.default['_strategies'].session.base_redirect_url = this._getBaseUrl(req.headers.referer);
            next();
        }, passport_1.default.authenticate('facebook', {
            scope: ['email', 'public_profile'],
        }));
        this.expressApp.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const baseRedirectUr = passport_1.default['_strategies'].session.base_redirect_url;
            if (req.user) {
                res.redirect(baseRedirectUr + req.user.redirectUrl);
            }
            else {
                res.redirect(baseRedirectUr || '');
            }
            passport_1.default['_strategies'].session.base_redirect_url = '';
        }));
        this.expressApp.get('/auth/google', (req, res, next) => {
            passport_1.default['_strategies'].session.base_redirect_url = this._getBaseUrl(req.headers.referer);
            next();
        }, passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
        this.expressApp.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/login' }), (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const baseRedirectUr = passport_1.default['_strategies'].session.base_redirect_url;
            if (req.user) {
                res.redirect(baseRedirectUr + req.user.redirectUrl);
            }
            else {
                res.redirect(baseRedirectUr || '');
            }
            passport_1.default['_strategies'].session.base_redirect_url = '';
        }));
    }
};
ServicesApp._poolSize = 50;
ServicesApp._connectTimeoutMS = 40000;
ServicesApp = ServicesApp_1 = tslib_1.__decorate([
    inversify_1.injectable(),
    tslib_1.__param(0, inversify_1.multiInject(IService_1.ServiceSymbol)),
    tslib_1.__param(1, inversify_1.inject('RoutersManager')),
    tslib_1.__param(2, inversify_1.inject(warehouses_1.WarehousesService)),
    tslib_1.__param(3, inversify_1.inject(users_1.SocialStrategiesService)),
    tslib_1.__param(4, inversify_1.inject(admins_1.AdminsService)),
    tslib_1.__param(5, inversify_1.inject(config_service_1.ConfigService)),
    tslib_1.__metadata("design:paramtypes", [Array, Object, warehouses_1.WarehousesService,
        users_1.SocialStrategiesService,
        admins_1.AdminsService,
        config_service_1.ConfigService])
], ServicesApp);
exports.ServicesApp = ServicesApp;
//# sourceMappingURL=services.app.js.map