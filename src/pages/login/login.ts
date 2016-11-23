import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Auth } from '../../providers/auth';
import { TempUser } from '../../providers/temp-user';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private pin: string;

  constructor(public navCtrl: NavController, private auth: Auth, private toast: ToastController, private tempUser: TempUser) {}

  login() {
    this.auth.authUser(this.pin).subscribe(
      data => {
        console.log(data);        
        if (data.noAuth) {          
          this.toast.create({
            message: data.msg,
            duration: 2000
          }).present();
        } else {
          this.toast.create({
            message: 'Sesión iniciada correctamente...',
            duration: 3000
          }).present();
          this.tempUser.setUser(data);      
          this.navCtrl.setRoot(HomePage);
          //this.navCtrl.push(HomePage);
        }
      },
      err => this.toast.create({message: 'Error con el servidor...', duration: 2000}).present(),
      () => console.log('Request a: muchacho/getAuth terminada...')
    );
  }

}
