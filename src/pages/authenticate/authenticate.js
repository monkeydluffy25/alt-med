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
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { HomePage } from '../home/home';
import { SignUpPage } from '../signup/signup';
/**
 * Authenticate page.
 */
var AuthenticatePage = (function () {
    /**
     * Constructor.
     *
     * @param navCtrl Navigation controller.
     * @param navParams Navigation params.
     * @param authenticateProvider Authenticate provider.
     */
    function AuthenticatePage(navCtrl, navParams, authenticateProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticateProvider = authenticateProvider;
        this.user = {};
    }
    /**
     * Call authenticator.
     */
    AuthenticatePage.prototype.login = function () {
        var _this = this;
        if (this.user.username && this.user.password) {
            this.authenticateProvider.authenticateUsingCredentials(this.user.username, this.user.password)
                .subscribe(function () {
                _this.navCtrl.setRoot(HomePage);
            });
        }
    };
    AuthenticatePage.prototype.gotoSignUp = function () {
        this.navCtrl.push(SignUpPage);
    };
    return AuthenticatePage;
}());
AuthenticatePage = __decorate([
    Component({
        selector: 'page-authenticate',
        templateUrl: 'authenticate.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, AuthenticateProvider])
], AuthenticatePage);
export { AuthenticatePage };
//# sourceMappingURL=authenticate.js.map