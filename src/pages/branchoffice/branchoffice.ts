import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { dataCoordinates } from "../../config/branchoffices.locations";
import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

import { MarkerDetailsPage } from "../marker-details/marker-details";

@Component({
  selector: 'page-branchoffice',
  templateUrl: 'branchoffice.html',
})
export class BranchOfficePage {

  coordinates:BranchOfficeInfo[] = dataCoordinates;
  branchSelected:BranchOfficeInfo;

  lat: number = 19.4351039;
  lng: number = -99.1839505;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, public modalCtrl: ModalController) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.coordinates[0].lat = this.lat;
      this.coordinates[0].lng = this.lng;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  showMapDetails( idxMark ){

    this.branchSelected = this.coordinates[idxMark];
    this.showModal( this.branchSelected );

  }

  showModal( marker:BranchOfficeInfo ) {
    let modal = this.modalCtrl.create(
      MarkerDetailsPage,
      {
        makerInfo: marker
      }
    );
    modal.present();
  }

}
