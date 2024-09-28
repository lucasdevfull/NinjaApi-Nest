"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _authservice = require("../services/auth.service");
const _userdto = require("../../../dto/user/user.dto");
const _swagger = require("@nestjs/swagger");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthController = class AuthController {
    login(data) {
        return this.auth.authentication(data);
    }
    logout(data) {
        return this.auth.logout(data.token);
    }
    constructor(auth){
        this.auth = auth;
    }
};
_ts_decorate([
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiBadRequestResponse)({
        description: 'Bad Request'
    }),
    (0, _swagger.ApiBody)({
        type: _userdto.LoginDto
    }),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    (0, _common.Post)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.LoginDto === "undefined" ? Object : _userdto.LoginDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiOkResponse)({
        description: 'Logout successful'
    }),
    (0, _common.HttpCode)(_common.HttpStatus.NO_CONTENT),
    (0, _common.Post)('logout'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.LogoutDto === "undefined" ? Object : _userdto.LogoutDto
    ]),
    _ts_metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    (0, _swagger.ApiTags)('auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map