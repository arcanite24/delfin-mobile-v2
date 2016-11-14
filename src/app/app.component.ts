import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddRemesaPage } from '../pages/add-remesa/add-remesa';
import { ListRemesaPage } from '../pages/list-remesa/list-remesa';


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

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
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
      default:
        this.navCtrl.push(HomePage);
        break;
    }
  }
}