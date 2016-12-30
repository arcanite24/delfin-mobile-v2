import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Clientes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Clientes {

  private apiEndpoint: string = 'http://restaurantelosdelfines.com/api/';

  constructor(public http: Http) {}

  addCliente(name: string) {
    return this.http.post(this.apiEndpoint + 'cliente', {name: name}).map(res => res.json());
  }

  getAllClientes() {
    return this.http.get(this.apiEndpoint + 'cliente').map(res => res.json());
  }

  deleteCliente(id: any) {
    return this.http.delete(this.apiEndpoint + 'cliente/' + id).map(res => res.json);
  }

  editCliente(name: string, id: any) {
    return this.http.put(this.apiEndpoint + 'cliente/' + id, {
      name: name
    }).map(res => res.json());
  }

}
