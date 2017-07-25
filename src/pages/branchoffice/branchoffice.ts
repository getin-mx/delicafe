import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { dataCoordinates } from "../../config/branchoffices.locations";
import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

@Component({
  selector: 'page-branchoffice',
  templateUrl: 'branchoffice.html',
})
export class BranchOfficePage {

  coordinates:BranchOfficeInfo[] = dataCoordinates;
  branchSelected:BranchOfficeInfo;

  lat: number = 19.4351039;
  lng: number = -99.1839505;

  showInfo:boolean = false;
  lastMarkerName:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private platform:Platform) {
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

    if(this.branchSelected.name != "Mi ubicacion"){
      if ( this.branchSelected.name != this.lastMarkerName ){
        this.showInfo = true;
      }else{
        this.showInfo = !this.showInfo;
      }
      this.lastMarkerName = this.branchSelected.name;
    }
  }// end showMapDetails()

  closeMarkerDetails() {
    this.showInfo = !this.showInfo;
  }

  showMap(){
      let destination = this.branchSelected.lat + ',' + this.branchSelected.lng;
      let label = encodeURI(this.branchSelected.name);
      if(this.platform.is('ios')){
        window.open('http://maps.apple.com/?q=' + label + '&saddr=' + destination + '&daddr=' + destination, '_system');
      } else {
  	      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
      }
  }

}
