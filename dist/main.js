"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
async function bootstrap() {
    const validationPipe = new _common.ValidationPipe();
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    const config = new _swagger.DocumentBuilder().setTitle('NinjaApi').setDescription('Api for NinjaApp').setVersion('1.0').addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
        in: 'header'
    }).build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(validationPipe);
    app.enableCors({
        origin: '*',
        credentials: true
    });
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(()=>app.close());
    }
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

//# sourceMappingURL=main.js.map