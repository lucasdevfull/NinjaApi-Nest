"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _common = require("@nestjs/common");
const _authservice = require("../apps/auth/auth.service");
const _prismaservice = require("../infra/prisma/prisma.service");
const _crypto = require("crypto");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let UserService = class UserService {
    async find(data) {
        return this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async create(data) {
        const salt = (0, _crypto.randomInt)(10, 16);
        const password = await this.auth.passwordHash(data.password, salt);
        return this.prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: password
            }
        });
    }
    constructor(auth, prisma){
        this.auth = auth;
        this.prisma = prisma;
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService,
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], UserService);

//# sourceMappingURL=user.service.js.map