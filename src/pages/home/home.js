var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data/data';
import { EditItemPage } from '../../pages/edit-item/edit-item';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.dataService.getData().then(function (todos) {
            if (todos) {
                _this.items = todos;
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.items = [
            { title: '2ndWeek of June', description: 'test2' },
            { title: '3rdWeek of June', description: 'test3' }
        ];
    };

    HomePage.prototype.showModal = function () {
    };

    HomePage.prototype.removeItem = function (item) {
        var i;
        for (i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
            }
        }
    };
    HomePage.prototype.editItem = function (item) {
        this.navCtrl.push(EditItemPage, {
            title: item.title,
            description: item.description
        });
    };
    HomePage.prototype.addItem = function (item) {
        console.log('picked item: ', item);
        var addModal = this.modalCtrl.create(AddItemPage, { selectedItem: item });
        addModal.onDidDismiss(function (item) {
            if (item) {
                console.log('returned item: ', item);
                // save item here
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveItem = function (item) {
        this.items.push(item);
    };
    HomePage.prototype.viewItem = function (item) {
        this.navCtrl.push(ItemDetailPage, {
            item: item
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController, Data])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map