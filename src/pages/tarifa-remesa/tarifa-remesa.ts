import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';

import { IRemesa } from '../../interfaces/IRemesa';

/*
  Generated class for the TarifaRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tarifa-remesa',
  templateUrl: 'tarifa-remesa.html'
})
export class TarifaRemesaPage {

  public remesa: IRemesa;
  public newTarifa: number;

  constructor(public navCtrl: NavController, private remesas: Remesas, private params: NavParams, private toast: ToastController) {
    this.remesa = this.params.get('remesa');
  }

  changeTarifa() {
    this.remesas.changeTarifa(this.remesa.id, this.newTarifa).subscribe(
      data => {
        this.toast.create({message: 'Tarifa cambiada correctamente a: ' + data.tarifa, duration: 1000}).present();
        this.remesas.addAction({
          embarque: this.remesa.id,
          tipo: 'cambioTarifa',
          newTarifa: this.newTarifa
        }).subscribe(data => this.navCtrl.pop());
      },
      err => {
        this.toast.create({message: 'Error al cambiar tarifa', duration: 1000}).present();
        this.navCtrl.pop();
      }
    );
  }

}
