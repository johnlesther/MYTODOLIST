import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  presentLoading() {
    this.loadingCtrl.create({

      content: 'Please wait...',
      duration: 20000,
      dismissOnPageChange: true
    }).present();
  }

  load(){
      this.presentLoading()
  	  this.navCtrl.push(HomePage,{
  		val: 'homelang'
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
