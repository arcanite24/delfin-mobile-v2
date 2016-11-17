import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IRemesa } from '../../interfaces/IRemesa';
import { Remesas } from '../../providers/remesas';

/*
  Generated class for the HistorialRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-historial-remesa',
  templateUrl: 'historial-remesa.html'
})
export class HistorialRemesaPage {

  private remesa: IRemesa;
  private acciones: Array<any>;

  constructor(public navCtrl: NavController, private params: NavParams, private remesas: Remesas) {
    this.remesa = this.params.get('remesa');
    this.remesas.getHistorial(this.remesa.id).subscribe(
      data => {
        console.log(data.acciones);
        this.acciones = data.acciones;
      }
    );
  }
}
