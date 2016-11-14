import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Remesas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Remesas {

  private apiEndpoint: string = 'http://congelados-delfin.arcanite24.c9users.io/api/';

  constructor(public http: Http) {}

  getRemesasActivas() {
    return this.http.get(this.apiEndpoint + 'embarque/getActivos').map(res => res.json());
  }

  getAllRemesas() {
    return this.http.get(this.apiEndpoint + 'embarque').map(res => res.json());
  }

  getAllClientes() {
    return this.http.get(this.apiEndpoint + 'cliente').map(res => res.json());
  }

  postRemesa(remesaData: any) {
    return this.http.post(this.apiEndpoint + 'embarque', remesaData).map(res => res.json());
  }

  retirarRemesa(id: string, peso: number, cantidad: number) {
    return this.http.post(this.apiEndpoint + 'embarque/retirar', {
      id: id,
      peso: peso,
      cantidad: cantidad
    }).map(res => res.json());
  }

  deleteRemesa(id: string) {
    return this.http.delete(this.apiEndpoint + 'embarque/' + id).map(res => res.json());
  }

}
