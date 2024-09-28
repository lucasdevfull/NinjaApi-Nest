"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _testing = require("@nestjs/testing");
const _passwordservice = require("../password.service");
describe('PasswordService', ()=>{
    let service;
    beforeEach(async ()=>{
        const module = await _testing.Test.createTestingModule({
            providers: [
                _passwordservice.PasswordService
            ]
        }).compile();
        service = module.get(_passwordservice.PasswordService);
    });
    it('should be defined', ()=>{
        expect(service).toBeDefined();
    });
});

//# sourceMappingURL=password.service.spec.js.map