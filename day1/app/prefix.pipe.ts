



import { PipeTransform, Pipe } from "@angular/core";

@Pipe(
    {
        name:'prefix'
    }
)
export class Prefix implements PipeTransform{
    transform(value:string,arg){
        return "BT-"+value;
    }
}