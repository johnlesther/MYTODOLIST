import { Component } from '@angular/core';
import { ModalController,NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { EditItemPage } from '../../pages/edit-item/edit-item';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



   public items = [];

 

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
     
     

    this.dataService.getData().then((todos) => {
   
      if(todos){
        this.items = todos;
      }
 
    });
 
  } 
  ionViewDidLoad(){
 
  }

  showModal(){

  }
 showToast() {
    const toast = this.toastCtrl.create({
      message:` 
      Click + to add Item
      Swipe left to Edit/Delete Item`,
      duration: 5000,
    });
    toast.present();
  }

    showAlert(){
    let alert = this.alertCtrl.create({
      title: `Instructions`,
      message: `
        <p>Follow this guidelines</p>
        <ul>
          <li>To add Item just click the + button</li>
          <li>To edit and delete Item just swipe the Item from left to right</li>
          <li>To view ItemDetails just click the Item</li>
        </ul>
      `,
      buttons: ['Okay']
    });
    alert.present();
  }


  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your Item were successfully deleted',
      duration: 2000,
    });
    toast.present();
  }
 

 removeItem(item){
   this.showToastWithCloseButton();
   var i;
    for(i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
        this.dataService.save(this.items);
      }
 
    }
      }

 editItem(item) {
    console.log('picked item: ', item);
    let addModal = this.modalCtrl.create(EditItemPage, { selectedItem: item });
    addModal.onDidDismiss((item) => {
      if (item) {
        this.dataService.save(this.items);
        console.log('returned item: ', item);
      }
    });
    addModal.present();
  }

      addItem(item){
        let addModal = this.modalCtrl.create(AddItemPage);
        addModal.onDidDismiss((item) => {
            if(item) {
                  this.saveItem(item);
            }
        });
        addModal.present();
 }

		  saveItem(item){	
		    this.items.push(item);
        this.dataService.save(this.items);
        
		  }
		 
		  viewItem(item){
		  	this.navCtrl.push(ItemDetailPage, {
    		item: item
		 
		  });

		}

    
}

		 
