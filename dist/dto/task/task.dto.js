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
    CreateTaskDto: function() {
        return CreateTaskDto;
    },
    TaskDto: function() {
        return TaskDto;
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
let CreateTaskDto = class CreateTaskDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'title'
    }),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'content'
    }),
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateTaskDto.prototype, "content", void 0);
let TaskDto = class TaskDto extends CreateTaskDto {
};
_ts_decorate([
    (0, _swagger.ApiProperty)({
        example: 'false'
    }),
    (0, _classvalidator.IsBoolean)(),
    _ts_metadata("design:type", Boolean)
], TaskDto.prototype, "status", void 0);

//# sourceMappingURL=task.dto.js.map