import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddRemesaPage } from '../pages/add-remesa/add-remesa';
import { ListRemesaPage } from '../pages/list-remesa/list-remesa';
import { AddClientePage } from '../pages/add-cliente/add-cliente';
import { ListClientePage } from '../pages/list-cliente/list-cliente';

import { TempUser } from '../providers/temp-user';


@Component({
  template: `
  <ion-menu [content]="content">
    <ion-content>      
      <ion-list>
        <ion-list-header>
          Delfines
        </ion-list-header>
        <ion-item (click)="goTo('homepage')">Inicio</ion-item>
        <ion-item (click)="goTo('add-remesa')">Agregar Remesa</ion-item>
        <ion-item (click)="goTo('list-remesa')">Lista de Remesas</ion-item>
        <ion-item (click)="goTo('add-cliente')">Agregar Cliente</ion-item>
        <ion-item (click)="goTo('list-cliente')">Lista de Clientes</ion-item>
        <ion-item (click)="logout()">Cerrar Sesión</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-nav [root]="rootPage" #content></ion-nav>
  `
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController;
  
  public content: any;
  rootPage = LoginPage;

  constructor(platform: Platform, private tempUser: TempUser, private menu: MenuController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  logout() {
    this.tempUser.currentUser = null;
    this.navCtrl.setRoot(LoginPage);
    this.menu.close();
  }

  goTo(state: string) {
    switch (state) {
      case 'add-remesa':
        this.navCtrl.push(AddRemesaPage);
        break;
      case 'list-remesa':
        this.navCtrl.push(ListRemesaPage);
        break;
      case 'homepage':
        this.navCtrl.push(HomePage);
        break;
      case 'add-cliente': 
        this.navCtrl.push(AddClientePage);
        break;
      case 'list-cliente': 
        this.navCtrl.push(ListClientePage);
        break;
      default:
        this.navCtrl.push(HomePage);
        break;
    }
    this.menu.close();
  }
}