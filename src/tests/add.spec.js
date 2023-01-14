const add = require('../add')
describe("测试add函数",()=>{
    test("add(1,2)===3",()=>{
        expect(add(1,2)).toBe(3)
    })
})
