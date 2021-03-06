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

  public remesa: IRemesa;
  public acciones: Array<any>;

  constructor(public navCtrl: NavController, private params: NavParams, private remesas: Remesas) {
    this.remesa = this.params.get('remesa');
    this.remesas.obtenerHistorial(this.remesa.id).subscribe(
      data => {
        this.acciones = data;
      },
      err => {
        console.log(err);
        
      }
    );
  }
}
