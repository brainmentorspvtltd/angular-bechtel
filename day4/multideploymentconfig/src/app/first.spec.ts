import {add} from './first';
describe("Add Suite",()=>{
  it("Add two numbers",()=>{
    let result = add(10,20);
    expect(result).toBe(30);
  })
  it("Add No numbers",()=>{
    let result = add();
    expect(result).toBe(0);
  })
})
