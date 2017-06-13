import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from "../login/login";
import { SignUpPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private authToken:string;

  constructor(public navCtrl: NavController, private storage: Storage) {
    // Or to get a key/value pair
    storage.get('authToken').then((val) => {
      if ( val != undefined || val != null ) {
        this.navCtrl.push(TabsPage);
      }
    });
  }

  goToLogin(){
    this.navCtrl.push( LoginPage );
  }

  goToRegister(){
    this.navCtrl.push( SignUpPage );
  }
}
