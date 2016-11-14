import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { Auth } from '../../providers/auth';

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

  constructor(public navCtrl: NavController, private auth: Auth, private toast: ToastController) {}

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
          this.navCtrl.setRoot(HomePage);
          //this.navCtrl.push(HomePage);
        }
      },
      err => console.log(err),
      () => console.log('Request a: muchacho/getAuth terminada...')
    );
  }

}
