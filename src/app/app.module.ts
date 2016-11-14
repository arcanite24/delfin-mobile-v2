import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AddRemesaPage } from '../pages/add-remesa/add-remesa';
import { ListRemesaPage } from '../pages/list-remesa/list-remesa';
import { DetailRemesaPage } from '../pages/detail-remesa/detail-remesa';
import { RetirarRemesaPage } from '../pages/retirar-remesa/retirar-remesa';
import { EditRemesaPage } from '../pages/edit-remesa/edit-remesa';

import { Auth } from '../providers/auth';
import { Remesas } from '../providers/remesas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AddRemesaPage,
    ListRemesaPage,
    DetailRemesaPage,
    RetirarRemesaPage,
    EditRemesaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AddRemesaPage,
    ListRemesaPage,
    DetailRemesaPage,
    RetirarRemesaPage,
    EditRemesaPage
  ],
  providers: [Auth, Remesas]
})
export class AppModule {}
