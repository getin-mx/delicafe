import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  avatar:string;
  showVisists:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.avatar = 'assets/img/common/logo.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
