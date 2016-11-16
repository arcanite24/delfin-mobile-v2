import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';
import { IRemesa } from '../../interfaces/IRemesa';

import { DetailRemesaPage } from '../detail-remesa/detail-remesa';
import { ListRemesaPage } from '../list-remesa/list-remesa';
import { ChangeRemesaPage } from '../change-remesa/change-remesa';
import { TarifaRemesaPage } from '../tarifa-remesa/tarifa-remesa';

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

  private remesa: IRemesa;
  private cantidadRetirar: number;

  constructor(
    public navCtrl: NavController, 
    private params: NavParams, 
    private toast: ToastController, 
    private remesas: Remesas, 
    private alert: AlertController) {
      this.remesa = this.params.get('remesa');
    }

  ionViewDidLoad() {
    
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

  openEliminar(remesa: any) {
    this.alert.create({
      title: '¿Estás seguro?',
      message: 'Estás a punto de eliminar la remesa: ' + remesa.nombreProducto,
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.remesas.deleteRemesa(remesa.id).subscribe(
              data => {
                this.navCtrl.push(ListRemesaPage);
              },
              err => {
                this.toast.create({message: 'Error al eliminar remesa', duration: 1000}).present();
                this.navCtrl.push(ListRemesaPage);
              }
            );
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('ño');            
          }
        }
      ]
    }).present();
  }

  cambiarEstancia(remesa: any) {
    this.navCtrl.push(ChangeRemesaPage, {
      id: this.remesa.id
    });
  }

  cambiarTarifa(remesa: any) {
    this.navCtrl.push(TarifaRemesaPage, {
      remesa: this.remesa
    });
  }

  finalizarRemesa() {
    this.remesas.finalizarRemesa(this.remesa.id).subscribe(
      data => {
        this.remesas.addAction({
          embarque: this.remesa.id,
          tipo: 'finalizar'
        }).subscribe(
          data => {
            this.toast.create({
              message: 'Remesa finalizada correctamente.',
              duration: 2000
            }).present();
            this.navCtrl.pop();
          }
        )        
      }
    )
  }

}
