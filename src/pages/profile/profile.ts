import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfileInfoInteface } from "../../interfaces/profile-info/profile-info.interface";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:any = {
    name: "Luis Alberto Cruz",
    email: "luis@getin.mx",
    birthday: null,
    gender: "male",
    userImge: "assets/img/login/04.png",
    address: "Agustin Iturbide",
    discounts: 0,
    visits: 0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
