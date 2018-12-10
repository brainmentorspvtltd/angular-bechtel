import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MyGuard implements CanActivate {
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
return true;
// if(){return true;} else{ route.navigate(['/error'])};
}
}
