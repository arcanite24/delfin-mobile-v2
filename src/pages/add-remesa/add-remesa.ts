import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';

import { HomePage } from '../home/home';

/*
  Generated class for the AddRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-remesa',
  templateUrl: 'add-remesa.html'
})
export class AddRemesaPage {

  private addRemesaData: any = {};
  private clientes: Array<any> = [];

  constructor(public navCtrl: NavController, private remesas: Remesas, private toast: ToastController) {
    this.addRemesaData = {
      nombreProducto: '',
      tipoEmpaquetado: '',
      cantidadEmpaques: 0,
      pesoPromedio: 0,
      peso: 0,
      tarifa: 0,
      cliente: '',
      estancia: ''
    };
    remesas.getAllClientes().subscribe(
      data => this.clientes = data,
      err => this.toast.create({message: 'Error al cargar los clientes...', duration: 1000}).present()
    );
  }

  addRemesa() {
    this.remesas.postRemesa(this.addRemesaData).subscribe(
      data => {
        this.toast.create({message: 'Remesa agregada correctamente...', duration: 1000}).present();
        this.navCtrl.push(HomePage);
      },
      err => this.toast.create({message: 'Error al agregar remesa...', duration: 1000}).present() 
    );
  }

  ionViewDidLoad() {
    console.log('Hello AddRemesaPage Page');
  }

}
