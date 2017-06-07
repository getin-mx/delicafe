import { Component } from '@angular/core';
import { ViewController, ToastController, NavParams, Platform } from "ionic-angular";

import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

@Component({
  selector: 'page-marker-details',
  templateUrl: 'marker-details.html',
})
export class MarkerDetailsPage {

  titulo:string = "";
  marker:BranchOfficeInfo;

  constructor(private navParams: NavParams, private viewCtrl:ViewController,private platform:Platform) {
    this.marker = navParams.get('makerInfo');
    console.log(this.marker);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  showMap(){
    let destination = this.marker.lat + ',' + this.marker.lng;

    if(this.platform.is('ios')){
	    window.open('maps://?q=' + destination, '_system');
    } else {
	     let label = encodeURI('My Label');
	      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }

}
