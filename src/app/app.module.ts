import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';  
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { EditItemPage } from '../pages/edit-item/edit-item';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data/data';
import { LoginPage } from '../pages/login/login';
import { NavController } from 'ionic-angular';



@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    HomePage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  LoginPage,
    MyApp,
    HomePage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage
  ],
  providers: [Data,StatusBar,SplashScreen, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})


export class AppModule {
//   constructor(public nav:NavController){
//     var nextPages;
//       nextPages();
// {
// this.nav.push(HomePage);
// }
// }

}
