import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { dataCoordinates } from "../../config/branchoffices.locations";
import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

@IonicPage()
@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  branchOffices:BranchOfficeInfo[] = dataCoordinates;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform:Platform) {
  }

  showMap( idxOffice:number ){
    let destination = this.branchOffices[idxOffice].lat + ',' + this.branchOffices[idxOffice].lng;

    if(this.platform.is('ios')){
	    window.open('maps://?q=' + destination, '_system');
    } else {
	     let label = encodeURI('My Label');
	      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }

}
