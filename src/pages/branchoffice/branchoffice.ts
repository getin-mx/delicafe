import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';

@Component({
  selector: 'page-branchoffice',
  templateUrl: 'branchoffice.html',
})
export class BranchOfficePage {

  coordinates:any[] = [
    {
      name:  "Deli Café Constituyentes #2",
      lat: 19.395210,
      lng: -99.230566
    }, {
      name:  "Deli Café ITAM",
      lat: 19.344184,
      lng: -99.200411
    }, {
      name:  "Deli Café Gruta",
      lat: 19.325825,
      lng: -99.200122
    }, {
      name:  "Deli Café Piaget",
      lat: 19.325139,
      lng: -99.222851
    }, {
      name:  "Deli Café Dos Vistas",
      lat: 19.365449,
      lng: -99.252263
    }, {
      name:  "Deli Café Corp. Chedraui",
      lat: 19.394032,
      lng: -99.236941
    }, {
      name:  "Deli Café Colegio Francés",
      lat: 19.313453,
      lng: -99.208188
    }, {
      name:  "Deli Café Boehringer",
      lat: 19.355284,
      lng: -99.115136
    }
  ];

  lat: number = 19.4351039;
  lng: number = -99.1839505;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
