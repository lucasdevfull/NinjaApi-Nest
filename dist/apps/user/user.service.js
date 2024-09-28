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
const _prismaservice = require("../../infra/prisma/prisma.service");
const _crypto = require("crypto");
const _sql = require("@prisma/client/sql");
const _passwordservice = require("../auth/services/password.service");
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
    async listUsers() {
        return this.prisma.user.findMany();
    }
    async findByEmail(email) {
        return this.prisma.user.findFirst({
            where: {
                email: email
            }
        });
    }
    async createUser(data) {
        const password = await this.password.passwordHash(data.password, (0, _crypto.randomInt)(10, 16));
        return this.prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: password
            }
        });
    }
    async findUser(id) {
        const user = await this.prisma.$queryRawTyped((0, _sql.findId)(id));
        if (!user) {
            throw new _common.HttpException('User not found', _common.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    constructor(password, prisma){
        this.password = password;
        this.prisma = prisma;
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _passwordservice.PasswordService === "undefined" ? Object : _passwordservice.PasswordService,
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], UserService);

//# sourceMappingURL=user.service.js.map