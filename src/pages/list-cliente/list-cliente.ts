import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clientes } from '../../providers/clientes';
import { ICliente } from '../../interfaces/ICliente';
import { EditClientePage } from '../edit-cliente/edit-cliente';

/*
  Generated class for the ListCliente page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-cliente',
  templateUrl: 'list-cliente.html'
})
export class ListClientePage {

  public allClientes: Array<ICliente>;

  constructor(public navCtrl: NavController, private clientes: Clientes) {
    this.clientes.getAllClientes().subscribe(
      data => this.allClientes = data
    );
  }

  editCliente(cliente: ICliente) {
    console.log('EditCliente: ', cliente);
    
    this.navCtrl.push(EditClientePage, {
      cliente: cliente
    });
  }  

}
