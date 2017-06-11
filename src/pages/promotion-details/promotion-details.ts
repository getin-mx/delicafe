import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

@IonicPage()
@Component({
  selector: 'page-promotion-details',
  templateUrl: 'promotion-details.html',
})
export class PromotionDetailsPage {
  branchOfficeDetails:BranchOfficeInfo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.branchOfficeDetails = this.navParams.get('branchInfo');
    console.log(this.branchOfficeDetails);
  }

}
