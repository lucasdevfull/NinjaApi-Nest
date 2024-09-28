"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _userservice = require("../../user/service/user.service");
const _jwt = require("@nestjs/jwt");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    async authentication(data) {
        const user = await this.user.findByEmail(data.email);
        if (!user) {
            throw new _common.HttpException('User not found', _common.HttpStatus.NOT_FOUND);
        }
        const access = await this.generateToken(user.id);
        return access;
    }
    async generateToken(id) {
        return {
            access_token: this.jwt.sign({
                id: id
            })
        };
    }
    async logout(token) {
        const access = await this.jwt.verify(token);
        if (!access) {
            throw new _common.HttpException('Invalid token', _common.HttpStatus.UNAUTHORIZED);
        }
        return {
            message: 'Logout successful'
        };
    }
    constructor(user, jwt){
        this.user = user;
        this.jwt = jwt;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map