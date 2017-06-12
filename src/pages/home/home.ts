import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from "../login/login";
import { SignUpPage } from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  goToLogin(){
    this.navCtrl.push( LoginPage );
  }

  goToRegister(){
    this.navCtrl.push( SignUpPage );
  }
}
