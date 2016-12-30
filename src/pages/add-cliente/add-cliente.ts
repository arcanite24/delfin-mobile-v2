import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ICliente } from '../../interfaces/ICliente';
import { Clientes } from '../../providers/clientes';

/*
  Generated class for the AddCliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-cliente',
  templateUrl: 'add-cliente.html'
})
export class AddClientePage {

  public newClienteName: string;

  constructor(public navCtrl: NavController, private clientes: Clientes, private toast: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello AddClientePage Page');
  }

  addCliente() {
    this.clientes.addCliente(this.newClienteName).subscribe(
      data => {
        this.toast.create({
          message: 'Cliente agreagado correctamente.',
          duration: 2000
        }).present();
        this.navCtrl.pop();
      },
      err => {
        this.toast.create({
          message: 'Error al agregar cliente.',
          duration: 2000
        }).present();
      }
    );
  }

}
