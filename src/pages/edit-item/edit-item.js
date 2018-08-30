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
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditItemPage = /** @class */ (function () {
    function EditItemPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.selectedItem = this.navParams.get('selectedItem');
    }
    EditItemPage.prototype.saveItem = function () {
        console.log('saved item: ', this.selectedItem);
        this.view.dismiss(this.selectedItem);
    };
    EditItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    EditItemPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-edit-item',
            templateUrl: 'edit-item.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, NavParams])
    ], EditItemPage);
    return EditItemPage;
}());
export { EditItemPage };
//# sourceMappingURL=edit-item.js.map