import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title='';
  description = '';
  date = '';
  location = '';
  complete = '';

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public view: ViewController,public navParams: NavParams) {
 
  }

doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Save',
      message: "Your Item Has been Saved Press Okay to Continue",
   
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
    let newItem = {
      title: this.title,
      description: this.description,
      date: this.date,
      location: this.location,
      complete: this.complete
      
    }
   
	this.doPrompt();
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}


