import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  private apiEndpoint: string = 'http://congelados-delfin.arcanite24.c9users.io/api/';

  constructor(public http: Http) {
    
  }

  authUser(pin: string) {
    return this.http.get(this.apiEndpoint + 'muchacho/getAuth/'+pin).map(res => res.json());
  }

}
