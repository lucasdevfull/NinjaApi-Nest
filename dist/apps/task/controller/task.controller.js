"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TaskController", {
    enumerable: true,
    get: function() {
        return TaskController;
    }
});
const _taskdto = require("../../../dto/task/task.dto");
const _taskservice = require("../service/task.service");
const _common = require("@nestjs/common");
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
let TaskController = class TaskController {
    list() {
        return this.task.list();
    }
    create(data) {
        return this.task.create(data);
    }
    getTask(id) {
        return this.task.findTask(id);
    }
    update(id, data) {
        return this.task.update(id, data);
    }
    delete(id) {
        return this.task.delete(id);
    }
    completed(id) {
        return this.task.completed(id);
    }
    constructor(task){
        this.task = task;
    }
};
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _taskdto.TaskDto,
        isArray: true
    }),
    (0, _common.Get)(),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "list", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiBody)({
        type: _taskdto.CreateTaskDto
    }),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _taskdto.TaskDto
    }),
    (0, _swagger.ApiBadRequestResponse)({
        description: 'Task already exists'
    }),
    (0, _common.Post)(),
    (0, _common.HttpCode)(_common.HttpStatus.CREATED),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _taskdto.CreateTaskDto === "undefined" ? Object : _taskdto.CreateTaskDto
    ]),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "create", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiNotFoundResponse)({
        description: 'Task not found'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _taskdto.TaskDto
    }),
    (0, _common.Get)(':id'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "getTask", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiNotFoundResponse)({
        description: 'Task not found'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _taskdto.TaskDto
    }),
    (0, _swagger.ApiBody)({
        type: _taskdto.TaskDto
    }),
    (0, _swagger.ApiBadRequestResponse)({
        description: 'Task already exists'
    }),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _common.Put)(':id'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number,
        typeof _taskdto.TaskDto === "undefined" ? Object : _taskdto.TaskDto
    ]),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "update", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiNotFoundResponse)({
        description: 'Task not found'
    }),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiNoContentResponse)({
        description: 'Task deleted'
    }),
    (0, _common.Delete)(':id'),
    (0, _common.HttpCode)(_common.HttpStatus.NO_CONTENT),
    _ts_param(0, (0, _common.Param)('id', _common.ParseIntPipe)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "delete", null);
_ts_decorate([
    (0, _swagger.ApiBearerAuth)(),
    (0, _swagger.ApiNotFoundResponse)({
        description: 'Task not found'
    }),
    (0, _swagger.ApiUnauthorizedResponse)({
        description: 'Unauthorized'
    }),
    (0, _swagger.ApiOkResponse)({
        type: _taskdto.TaskDto
    }),
    (0, _common.Put)(':id/completed'),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Number
    ]),
    _ts_metadata("design:returntype", void 0)
], TaskController.prototype, "completed", null);
TaskController = _ts_decorate([
    (0, _common.Controller)('task'),
    (0, _swagger.ApiTags)('Task'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _taskservice.TaskService === "undefined" ? Object : _taskservice.TaskService
    ])
], TaskController);

//# sourceMappingURL=task.controller.js.map