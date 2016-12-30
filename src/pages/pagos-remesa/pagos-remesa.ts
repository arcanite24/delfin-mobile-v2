import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Remesas } from '../../providers/remesas';

/*
  Generated class for the PagosRemesa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pagos-remesa',
  templateUrl: 'pagos-remesa.html'
})
export class PagosRemesaPage {

  public pagos: Array<any>;

  constructor(public navCtrl: NavController, private remesas: Remesas, private params: NavParams) {
    this.remesas.getAllPagos(this.params.get('id')).subscribe(
      data => this.pagos = data,
      err => console.log(err)      
    )
  }

}
