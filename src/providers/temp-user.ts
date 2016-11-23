import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TempUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TempUser {

  public currentUser: any;

  constructor(public http: Http) {
    this.currentUser = {};
  }

  setUser(user: any) {
    this.currentUser = user;
  }

}
