import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TempUser } from './temp-user';

/*
  Generated class for the Remesas provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Remesas {

  private apiEndpoint: string = 'http://congeladosdelfines.com/api/';
  //private apiEndpoint: string = 'http://congelados-delfin.arcanite24.c9users.io/api/';

  constructor(public http: Http, private tempUser: TempUser) {}

  getRemesasActivas() {
    return this.http.get(this.apiEndpoint + 'embarque/getActivos').map(res => res.json());
  }

  getAllRemesas() {
    return this.http.get(this.apiEndpoint + 'embarque/getActivos').map(res => res.json());
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

  changeEstancia(id: string, estancia: number) {
    return this.http.put(this.apiEndpoint + 'embarque/' + id, {estancia: estancia}).map(res => res.json());
  }
 
  changeTarifa(id: string, newTarifa: number) {
    return this.http.put(this.apiEndpoint + 'embarque/' + id, {tarifa: newTarifa}).map(res => res.json());
  }

  finalizarRemesa(id: string) {
    return this.http.put(this.apiEndpoint + 'embarque/' + id, {status: 'STATUS_INACTIVO', cantidadEmpaques: 0}).map(res => res.json());
  }

  addAction(data: any) {
    data.muchacho = this.tempUser.currentUser.id;    
    return this.http.post(this.apiEndpoint + 'accion', data).map(res => res.json);
  }

  getHistorial(id: string) {    
    return this.http.get(this.apiEndpoint + 'embarque/getHistorial/' + id).map(res => res.json());
  }

  obtenerHistorial(id: any) {
    return this.http.get(this.apiEndpoint + 'embarque/getHistorial/' + id).map(res => res.json());
  }

  addPago(idRemesa: any, cantidad: number, remesa: any) {
    return this.http.post(this.apiEndpoint + 'pago', {
      remesa: idRemesa,
      cantidad: cantidad,
      muchacho: this.tempUser.currentUser.id,
      tarifa: remesa.tarifa,
      peso: remesa.peso
    }).map(res => res.json());
  }

  getAllPagos(idRemesa: any) {
    return this.http.get(this.apiEndpoint + 'pago/getByRemesa/' + idRemesa).map(res => res.json());
  }

}
