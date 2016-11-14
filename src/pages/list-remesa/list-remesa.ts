import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';

import { DetailRemesaPage } from '../detail-remesa/detail-remesa';

/*
  Generated class for the ListRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-remesa',
  templateUrl: 'list-remesa.html'
})
export class ListRemesaPage {

  private allRemesas: Array<any> = [];

  constructor(public navCtrl: NavController, private remesas: Remesas, private toast: ToastController) {}

  ionViewDidLoad() {
    this.remesas.getAllRemesas().subscribe(
      data => this.allRemesas = data,
      err => this.toast.create({message: 'Error al cargar remesas...', duration: 1000}).present()
    );
  }

  goToDetail(remesa: any) {
    console.log(remesa);
    
    this.navCtrl.push(DetailRemesaPage, {
      remesa: remesa
    });
  }

}
