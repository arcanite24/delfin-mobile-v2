import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HistorialRemesaPage Page');
  }

}
