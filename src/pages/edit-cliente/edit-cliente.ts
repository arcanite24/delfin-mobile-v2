import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { ICliente } from '../../interfaces/ICliente';
import { Clientes } from '../../providers/clientes';

/*
  Generated class for the EditCliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-cliente',
  templateUrl: 'edit-cliente.html'
})
export class EditClientePage {

  public cliente: ICliente;

  constructor(public navCtrl: NavController,
  private params: NavParams,
  private toast: ToastController,
  private clientes: Clientes) {
    this.cliente = params.get('cliente');
  }

  deleteCliente() {
    this.clientes.deleteCliente(this.cliente.id).subscribe(data => {
      this.toast.create({
        message: 'Cliente eliminado correctamente.',
        duration: 2000
      }).present();
      this.navCtrl.pop();
    }, err => {
      this.toast.create({
        message: 'Error al eliminar cliente.',
        duration: 2000
      }).present();
    });
  }

  editCliente() {
    this.clientes.editCliente(this.cliente.name, this.cliente.id).subscribe(
      data => {
        this.toast.create({
          message: 'Cliente editado correctamente.',
          duration: 2000
        }).present();
        this.navCtrl.pop();
      },
      err => {
        this.toast.create({
          message: 'Error al editar cliente.',
          duration: 2000
        }).present();
      }
    );
  }

}
