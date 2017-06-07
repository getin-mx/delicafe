import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfileInfoInteface } from "../../interfaces/profile-info/profile-info.interface";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:ProfileInfoInteface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user.avatar = 'assets/img/perfil/avatar.png';
    this.user.visits = 0;
    this.user.discounts = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
