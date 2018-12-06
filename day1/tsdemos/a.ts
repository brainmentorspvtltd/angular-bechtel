






function show(){

}
function add(a:number,b:number):number{
    return a + b;
}

var e = {a:"Hello",b:1001};
var r1 = {a:1000, b:2000};
var d :{a:string,b:number}  = e;
d  = r1;

var myfn:(x:number,y:number)=>number;
myfn = add;
//myfn = show;
var d:number = add(10,20);
console.log("Sum is ",d);

var e:[string,number]=["Ram",100];
console.log(e[0])
console.log(e[1]);

// function test(x){
// x++;
// }
// test(100);
// test("");

// var nn = 1000;
// nn = "Hello";
// var bb:string|number ;
// bb = 1999;
// //bb= true;
// var m:any = 100;
// m  = true;
// let a:number = 100;
// let b:string="Amit";
// let c:boolean = true;
// let d:string[] = ["amit","ram"];
// //let a = 100;
// //a="amit";