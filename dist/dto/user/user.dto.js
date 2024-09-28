"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoginDto: function() {
        return LoginDto;
    },
    LogoutDto: function() {
        return LogoutDto;
    },
    UserDto: function() {
        return UserDto;
    }
});
const _swagger = require("@nestjs/swagger");
const _classvalidator = require("class-validator");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UserDto = class UserDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], UserDto.prototype, "username", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsEmail)(),
    _ts_metadata("design:type", String)
], UserDto.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    (0, _classvalidator.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    _ts_metadata("design:type", String)
], UserDto.prototype, "password", void 0);
let LoginDto = class LoginDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsEmail)(),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
let LogoutDto = class LogoutDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)(),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], LogoutDto.prototype, "token", void 0);

//# sourceMappingURL=user.dto.js.map