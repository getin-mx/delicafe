import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  avatar:string;
  userSucursalInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar = 'assets/img/perfil/avatar.png';
    this.userSucursalInfo = { visits: 0, discounts: 0 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
