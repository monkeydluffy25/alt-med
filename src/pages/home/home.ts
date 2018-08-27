import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//Platform
import { AuthenticateProvider } from '../../providers/authenticate/authenticate';
import { RequireAuthenticationPage } from '../authenticate/require-authentication';
import { SearchMedProvider } from '../../providers/searchmed/searchmed';
import 'rxjs/add/operator/map';
import { SearchMedFullProvider } from '../../providers/searchmedsfull/searchmedsfull';
import {ExplainPage } from '../explain/explain';

//import { PrescribedPage } from '../prescribed/prescribed';
//import { AlternatePage } from '../alternate/alternate';
/**
 * Home page extending require authentication page.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'

})
export class HomePage extends RequireAuthenticationPage {
    in_drug: string;
    medicines =[];

    constructor(public SearchMedsFull: SearchMedFullProvider,public SearchMeds: SearchMedProvider,public navCtrl: NavController, public navParams: NavParams, public authenticateProvider: AuthenticateProvider) {
        super(navCtrl, navParams, authenticateProvider);
    }


  getItems() {
      //console.log("input-"+this.in_drug);
      this.SearchMeds.postsearchmeds(this.in_drug)
      .subscribe(data=>{
         //console.log("1-"+data);
        this.medicines=data;

      })
      //console.log("2-"+data);
      //console.log("2-"+this.medicines);

  }
  getItemsfull(medicine) {
      //console.log("fullinput-"+medicine);
      this.SearchMedsFull.postsearchmedsfull(medicine)
      .subscribe(data=>{
         //console.log("111-"+data)
        this.medicines=data;

          this.navCtrl.push(ExplainPage,this.medicines);


      })
      //console.log("2-"+data);
      //console.log("222-"+this.medicines);

  }

}
