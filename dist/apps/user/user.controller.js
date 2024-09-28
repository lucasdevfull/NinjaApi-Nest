"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _common = require("@nestjs/common");
const _userservice = require("./user.service");
const _userdto = require("../../dto/user/user.dto");
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
let UserController = class UserController {
    listUsers() {
        return this.user.listUsers();
    }
    createUser(data) {
        return this.user.createUser(data);
    }
    findUser(id) {
        return this.user.findUser(id);
    }
    constructor(user){
        this.user = user;
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], UserController.prototype, "listUsers", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _common.HttpCode)(_common.HttpStatus.CREATED),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdto.UserDto === "undefined" ? Object : _userdto.UserDto
    ]),
    _ts_metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], UserController.prototype, "findUser", null);
UserController = _ts_decorate([
    (0, _common.Controller)('user'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userservice.UserService === "undefined" ? Object : _userservice.UserService
    ])
], UserController);

//# sourceMappingURL=user.controller.js.map