"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TaskService", {
    enumerable: true,
    get: function() {
        return TaskService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../infra/prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let TaskService = class TaskService {
    async list() {
        return await this.prisma.task.findMany();
    }
    async create(data) {
        const consult = {
            title: data.title
        };
        const task = await this.prisma.task.findFirst({
            where: consult
        });
        if (task) {
            throw new _common.HttpException('Task already exists', _common.HttpStatus.BAD_REQUEST);
        }
        return await this.prisma.task.create({
            data: {
                title: data.title,
                content: data.content
            }
        });
    }
    async findTask(id) {
        const task = await this.prisma.task.findUnique({
            where: {
                id: id
            }
        });
        if (!task) {
            throw new _common.HttpException('Task not found', _common.HttpStatus.NOT_FOUND);
        }
        return task;
    }
    async update(id, data) {
        await this.findTask(id);
        return await this.prisma.task.update({
            where: {
                id: Number(id)
            },
            data: {
                title: data.title,
                content: data.content,
                status: data.status
            }
        });
    }
    async delete(id) {
        await this.findTask(id);
        return await this.prisma.task.delete({
            where: {
                id: Number(id)
            }
        });
    }
    async completed(id) {
        const task = await this.findTask(id);
        const completed = !task.status;
        return await this.prisma.task.update({
            where: {
                id: Number(id)
            },
            data: {
                status: completed
            }
        });
    }
    constructor(prisma){
        this.prisma = prisma;
    }
};
TaskService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], TaskService);

//# sourceMappingURL=task.service.js.map