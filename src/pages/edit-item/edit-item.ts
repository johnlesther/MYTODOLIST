import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
// *
//  * Generated class for the EditItemPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
 

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
	selectedItem: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,public view: ViewController, public navParams: NavParams) {
  	 this.selectedItem = this.navParams.get('selectedItem');
  }
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Edit Saved',
      message: "The Item you Edit Has been save",
   
      buttons: [
        {
          text: 'Okay',
          handler: data => {
            this.navCtrl.push(HomePage,{
      val: 'homelang'
    })
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  saveItem(){
    console.log('saved item: ', this.selectedItem);
    this.doPrompt();
    this.view.dismiss(this.selectedItem);


  }

  close(){
    this.view.dismiss();
  }

}
