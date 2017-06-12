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
    userImge: "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/10523165_885674794776493_9170860125998167431_n.jpg?oh=b7ac6a00f62dab1cf1e6488598f82ebd&oe=59A4532C",
    address: "Agustin Iturbide",
    discounts: 0,
    visits: 0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

}
