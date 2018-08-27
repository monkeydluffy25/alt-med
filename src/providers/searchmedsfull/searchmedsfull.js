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
import 'rxjs/add/operator/map';
var SearchMedFullProvider = (function () {
    function SearchMedFullProvider(http) {
        this.http = http;
        console.log('Hello SearchMedsFUllProvider');
    }
    SearchMedFullProvider.prototype.postsearchmedsfull = function (params) {
        console.log("provider-" + params);
        return this.http.post('http://localhost:8095/meds/searchfull', {
            search: params
        })
            .map(function (res) { return res.json(); });
        // console.log(res);
        // console.log(res.json());
    };
    return SearchMedFullProvider;
}());
SearchMedFullProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SearchMedFullProvider);
export { SearchMedFullProvider };
//# sourceMappingURL=searchmedsfull.js.map