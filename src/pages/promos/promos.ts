import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { dataCoordinates } from "../../config/branchoffices.locations";
import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";
import { PromotionDetailsPage } from "../promotion-details/promotion-details";

@IonicPage()
@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  branchOffices:BranchOfficeInfo[] = dataCoordinates;
  searchBar:string;

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

  goToPromoDetails( idxOffice:number ){
    this.navCtrl.push(
      PromotionDetailsPage,
      {
        'branchInfo': this.branchOffices[idxOffice],
      }
    );
  }

  onInput( event:any ){

    console.log(event.target.value);

  }

}
