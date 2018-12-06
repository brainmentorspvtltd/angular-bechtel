


class Emp{
private _id:number;
constructor(id:number, private name:string, public salary:number){
     this._id = id;

}
set id(id:number){
    if(id>0){
    this._id = id;
    }
    else{
        console.log("Invalid Id ");
    }
}
get id(){
    return this._id;
}
show():void{
    console.log(`Id is ${this._id} Name is ${this.name} Salary is ${this.salary}`);
}
}
var ram:Emp  = new Emp(1001,"Ram",99999);
ram.id = 1002;
console.log("Getter is ",ram.id);
ram.show();