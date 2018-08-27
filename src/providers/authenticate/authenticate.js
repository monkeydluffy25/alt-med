var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
var AuthenticateProvider = (function () {
    function AuthenticateProvider(http) {
        this.http = http;
        console.log('Hello AuthenticateProvider Provider');
    }
    /**
     * Store user on local storage.
     *
     * @param user User.
     */
    AuthenticateProvider.prototype.setAuthenticatedUser = function (user) {
        if (user != null) {
            localStorage.setItem('app.userInfo', 'true');
            localStorage.setItem('app.userInfo.id', user.id);
            localStorage.setItem('app.userInfo.name', user.name);
        }
    };
    /**
     * Get user from local storage.
     *
     * @return User.
     */
    AuthenticateProvider.prototype.getAuthenticatedUser = function () {
        var user;
        if (localStorage.getItem('app.userInfo')) {
            user = {
                id: localStorage.getItem('app.userInfo.id'),
                name: localStorage.getItem('app.userInfo.name')
            };
        }
        return user;
    };
    /**
     * Remove user from local storage.
     */
    AuthenticateProvider.prototype.clearAuthenticatedUser = function () {
        localStorage.removeItem('app.userInfo');
        localStorage.removeItem('app.userInfo.id');
        localStorage.removeItem('app.userInfo.name');
    };
    /**
     * Perform authentication using credentials.
     *
     * @param user Username.
     * @param password Password.
     */
    AuthenticateProvider.prototype.authenticateUsingCredentials = function (user, password) {
        var _this = this;
        if (user === null || password === null) {
            // Throws error message.
            return Observable.throw('User and password are required.');
        }
        else {
            // Creates Observable.
            return Observable.create(function (observer) {
                // Perform server request to validate user credentials.
                _this.setAuthenticatedUser({ id: '1', name: 'FortDev' });
                observer.next();
                observer.complete();
            });
        }
    };
    return AuthenticateProvider;
}());
AuthenticateProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AuthenticateProvider);
export { AuthenticateProvider };
//# sourceMappingURL=authenticate.js.map