import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';

import { DetailRemesaPage } from '../detail-remesa/detail-remesa';

/*
  Generated class for the RetirarRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-retirar-remesa',
  templateUrl: 'retirar-remesa.html'
})
export class RetirarRemesaPage {

  private remesa: any;
  private cantidadRetirar: number;

  constructor(public navCtrl: NavController, private params: NavParams, private toast: ToastController, private remesas: Remesas) {
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
  }

  ionViewDidLoad() {
    this.remesa = this.params.get('remesa');
  }

  retirar() {
    if (this.cantidadRetirar > this.remesa.cantidadEmpaques) {
      this.toast.create({
        message: 'No puedes retirar más de la existencia...',
        duration: 3000
      }).present();
      return;
    } else if (this.remesa.cantidadEmpaques == this.cantidadRetirar) {
      this.toast.create({
        message: 'Si quieres retirar todo, presiona FINALIZAR...',
        duration: 3000
      }).present();
      return;
    }

    this.remesa.cantidadEmpaques -= this.cantidadRetirar;
    this.remesa.peso = this.remesa.cantidadEmpaques * this.remesa.pesoPromedio;

    this.remesas.retirarRemesa(this.remesa.id, this.remesa.peso, this.remesa.cantidadEmpaques).subscribe(
      data => {
        this.toast.create({
          message: '¡Retiro exitoso!',
          duration: 2000
        }).present();
        this.navCtrl.push(DetailRemesaPage, {
          remesa: this.remesa
        });
      },
      err => {
        this.toast.create({
          message: '¡Error al retirar!',
          duration: 2000
        }).present();
      }    
    );

  }

}
