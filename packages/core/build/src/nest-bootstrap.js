"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const env_1 = require("./env");
const Log_1 = require("./helpers/Log");
const NestJSLogger_1 = require("./helpers/NestJSLogger");
const log = Log_1.createEverLogger({ name: 'bootstrapNest' });
function bootstrapNest() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const port = env_1.env.GQLPORT;
        const app = yield core_1.NestFactory.create(app_module_1.ApplicationModule, {
            logger: new NestJSLogger_1.EverbieNestJSLogger(),
        });
        app.enableCors();
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Ever REST API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api', app, document);
        yield app.listen(port + '');
        if (module.hot) {
            module.hot.accept();
            module.hot.dispose((_) => app.close());
        }
        log.info(`Swagger UI available at http://localhost/api`);
        console.log(`Swagger UI available at http://localhost/api`);
    });
}
exports.bootstrapNest = bootstrapNest;
//# sourceMappingURL=nest-bootstrap.js.map