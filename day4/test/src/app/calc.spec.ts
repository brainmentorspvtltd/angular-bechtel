import {Calc} from './calc';
describe("This is a Calc Test Suite",()=>{
    it("should add 2 numbers ",()=>{
        let x = 10;
        let y = 20;
        let calc:Calc = new Calc();
        let result = calc.add(x,y);
        expect(result).toBe(30);
    })
    it("should add 0 numbers ",()=>{
       
        let calc:Calc = new Calc();
        let result = calc.add();
        expect(result).toBe(0);
    })
    it("should add 1 numbers ",()=>{
       
        let calc:Calc = new Calc();
        let result = calc.add(10);
        expect(result).toBe(10);
    })
})