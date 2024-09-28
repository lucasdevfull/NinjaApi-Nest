"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _common = require("@nestjs/common");
const _appcontroller = require("./app.controller");
const _appservice = require("./app.service");
const _taskmodule = require("./apps/task/task.module");
const _prismamodule = require("./infra/prisma/prisma.module");
const _usermodule = require("./apps/user/user.module");
const _authmodule = require("./apps/auth/modules/auth.module");
const _passwordmodule = require("./apps/auth/modules/password.module");
const _passwordservice = require("./apps/auth/services/password.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _taskmodule.TaskModule,
            _prismamodule.PrismaModule,
            _usermodule.UserModule,
            _authmodule.AuthModule,
            _passwordmodule.PasswordModule
        ],
        controllers: [
            _appcontroller.AppController
        ],
        providers: [
            _appservice.AppService,
            _passwordservice.PasswordService
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map