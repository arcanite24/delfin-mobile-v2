import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';
import { DetailRemesaPage } from '../detail-remesa/detail-remesa';

/*
  Generated class for the ChangeRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-remesa',
  templateUrl: 'change-remesa.html'
})
export class ChangeRemesaPage {

  public newEstancia: number;
  public id: string;

  constructor(public navCtrl: NavController, private params: NavParams, private remesas: Remesas) {}

  ionViewDidLoad() {
    this.id = this.params.get('id');
  }

  cambiarEstancia() {
    this.remesas.changeEstancia(this.id, this.newEstancia).subscribe(
      data => {
        this.remesas.addAction({
          embarque: this.id,
          tipo: 'cambioEstancia',
          newEstancia: this.newEstancia
        }).subscribe(data => this.navCtrl.pop());
      }      
    );
  }

}
