import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { ProfileInfoInteface } from "../../interfaces/profile-info/profile-info.interface";
import { ProfileDetailsPage } from "../profile-details/profile-details";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user:ProfileInfoInteface = {
      name: "Luis Alberto Cruz",
      email: "luis@getin.mx",
      birthday: null,
      gender: "male",
      userImge: "https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/10523165_885674794776493_9170860125998167431_n.jpg?oh=b7ac6a00f62dab1cf1e6488598f82ebd&oe=59A4532C",
      address: "Agustin Iturbide",
      discounts: 0,
      visits: 0,
  };

  constructor(public modalCtrl: ModalController, private storage: Storage) {
    // Or to get a key/value pair
    storage.get('email').then((val) => {
      if ( val != undefined || val != null ) {
        this.user.email = val;
      }
    });

    storage.get('name').then((val) => {
      if ( val != undefined || val != null ) {
        this.user.name = val;
      }
    });
    storage.get('userImge').then((val) => {
      if ( val != undefined || val != null ) {
        this.user.userImge = val;
      }
    });
    storage.get('birthday').then((val) => {
      if ( val != undefined || val != null ) {
        this.user.birthday = val;
      }
    });
  }

  goToProfileDetails() {
    let modal = this.modalCtrl.create(
      ProfileDetailsPage ,
      {
        user: this.user,
      }
    );
    modal.present();
  }

}
