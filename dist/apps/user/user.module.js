"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserModule", {
    enumerable: true,
    get: function() {
        return UserModule;
    }
});
const _passwordmodule = require("../auth/modules/password.module");
const _prismamodule = require("../../infra/prisma/prisma.module");
const _usercontroller = require("./controller/user.controller");
const _userservice = require("./service/user.service");
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let UserModule = class UserModule {
};
UserModule = _ts_decorate([
    (0, _common.Module)({
        imports: [
            _prismamodule.PrismaModule,
            _passwordmodule.PasswordModule
        ],
        controllers: [
            _usercontroller.UserController
        ],
        providers: [
            _userservice.UserService
        ],
        exports: [
            _userservice.UserService
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map