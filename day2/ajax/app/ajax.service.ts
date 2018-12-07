import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Product} from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AjaxService{
  constructor(private http:Http,private httpclient:HttpClient){

  }

    getPr(): Observable<Product[]> {
      const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
      return this.http.get(url)
        .map(response => response.json());
    }

  getProductsFromRx():Observable<Product[]>{
    /*
    this.httpclient.post(url,
        {
            "name": "Amit",
            "email": "amit@email.com",
            "mobile": "2222"
        })
    */
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    return this.httpclient.get<Product[]>(url);
  }
  getProductsFromPromise():Promise<Product[]>{
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    return this.http.get(url).toPromise().then(response=>{
      return response.json().mobiles as Product[];
    }).catch(err=>Promise.reject(err));
  }
}
