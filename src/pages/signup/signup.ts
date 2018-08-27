import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignUpPage {
  user: any={};



    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    details(){
      console.log("name-"+this.user.name);
      console.log("mob-"+this.user.mob);
      console.log("email-"+this.user.email);
      console.log("username-"+this.user.username);
      console.log("password-"+this.user.password);
      console.log("address-"+this.user.add);
      console.log("pincode-"+this.user.pin);
    }

}
