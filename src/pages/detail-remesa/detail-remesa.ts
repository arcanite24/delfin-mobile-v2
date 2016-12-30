import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RetirarRemesaPage } from '../retirar-remesa/retirar-remesa';
import { HistorialRemesaPage } from '../historial-remesa/historial-remesa';

/*
  Generated class for the DetailRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-remesa',
  templateUrl: 'detail-remesa.html'
})
export class DetailRemesaPage {

  public remesa: any;

  constructor(public navCtrl: NavController, private params: NavParams) {
    this.remesa = {
      nombreProducto: '',
      tipoEmpaquetado: '',
      cantidadEmpaques: 0,
      pesoPromedio: 0,
      peso: 0,
      tarifa: 0,
      cliente: '',
      estancia: ''
    };
    this.remesa = this.params.get('remesa');
  }

  goToRetirar(remesa: any) {
    this.navCtrl.push(RetirarRemesaPage, {
      remesa: remesa
    });
  }

  goToHistorial(remesa: any) {
    this.navCtrl.push(HistorialRemesaPage, {
      remesa: this.remesa
    });
  }

}
