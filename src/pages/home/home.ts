import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Remesas } from '../../providers/remesas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public remesasActivas: Array<any> = [];

  constructor(public navCtrl: NavController, private remesas: Remesas) {
    //Cargar las remesas
    this.remesas.getRemesasActivas().subscribe(
      data => this.remesasActivas = data,
      err => console.log(err)      
    );
  }
  
  getProximoPago(remesa: any) {
    //Obtener fechas, fecha de cuando se metió y la fecha actual
    var startDate = new Date(Date.parse(remesa.createdAt));
    var todayDate = new Date();
    
    //Diferencial de los meses
    var dm = startDate.getMonth() - todayDate.getMonth();
    
    //Encontrar la fecha de cuando se tiene que pagar, fecha inicial mas la diferencia de meses, mas un mes
    startDate.setMonth(startDate.getMonth() + dm + 1);
    return startDate;
  }

}
