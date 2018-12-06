


function test(){

}

class Account{
    show():void{
        console.log("Account Show...");
    }


    constructor(protected balance:number){

}
}
class SavingAccount extends Account{
    constructor(public roi:number){
        super(10000);
    }
    show():void{
        super.show();
        console.log("SA Show Call");
    }
    print():void{
        console.log("Balance is ",this.balance+" ROI "+this.roi);
    }
}
class CurrentAccount extends Account{

    constructor(public roi:number){
        super(20000);
    }
    show():void{
        super.show();
        console.log("CA Show Call");
    }
    print():void{
        console.log("CA Balance is ",this.balance+" "+this.roi);
    }
}

var sa:SavingAccount = new SavingAccount(10);
sa.print();
sa.show();

var sa2:Account = new SavingAccount(5);