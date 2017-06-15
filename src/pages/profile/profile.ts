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
      name: "",
      email: "",
      password: "",
      birthday: null,
      gender: "male",
      userImge: "",
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
    storage.get('password').then((val) => {
      if ( val != undefined || val != null ) {
        this.user.password = val;
      }
    });

    console.log(this.user);
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
