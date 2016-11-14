import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EditRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-remesa',
  templateUrl: 'edit-remesa.html'
})
export class EditRemesaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EditRemesaPage Page');
  }

}
