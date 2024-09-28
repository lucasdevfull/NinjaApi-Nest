"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _taskcontroller = require("../task.controller");
describe('TaskController', ()=>{
    let controller;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            controllers: [
                _taskcontroller.TaskController
            ]
        }).compile();
        controller = module.get(_taskcontroller.TaskController);
    });
    it('should be defined', ()=>{
        expect(controller).toBeDefined();
    });
});

//# sourceMappingURL=task.controller.spec.js.map