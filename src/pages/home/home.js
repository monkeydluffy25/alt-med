var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { NavController, NavParams } from 'ionic-angular';
//Platform
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { RequireAuthenticationPage } from '../authenticate/require-authentication';
import { SearchMedProvider } from '../../providers/searchmed/searchmed';
import 'rxjs/add/operator/map';
import { SearchMedFullProvider } from '../../providers/searchmedsfull/searchmedsfull';
//import { PrescribedPage } from '../prescribed/prescribed';
//import { AlternatePage } from '../alternate/alternate';
/**
 * Home page extending require authentication page.
 */
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(SearchMedsFull, SearchMeds, navCtrl, navParams, authenticateProvider) {
        var _this = _super.call(this, navCtrl, navParams, authenticateProvider) || this;
        _this.SearchMedsFull = SearchMedsFull;
        _this.SearchMeds = SearchMeds;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.authenticateProvider = authenticateProvider;
        _this.medicines = [];
        return _this;
    }
    HomePage.prototype.getItems = function () {
        var _this = this;
        console.log("input-" + this.in_drug);
        this.SearchMeds.postsearchmeds(this.in_drug)
            .subscribe(function (data) {
            console.log("1-" + data);
            _this.medicines = data;
        });
        //console.log("2-"+data);
        console.log("2-" + this.medicines);
    };
    HomePage.prototype.getItemsfull = function (medicine) {
        var _this = this;
        console.log("fullinput-" + medicine);
        this.SearchMedsFull.postsearchmedsfull(medicine)
            .subscribe(function (data) {
            console.log("111-" + data);
            _this.medicines = data;
        });
        //console.log("2-"+data);
        console.log("222-" + this.medicines);
    };
    return HomePage;
}(RequireAuthenticationPage));
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [SearchMedFullProvider, SearchMedProvider, NavController, NavParams, AuthenticateProvider])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map