import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionDetailsPage } from './promotion-details';

@NgModule({
  declarations: [
    PromotionDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionDetailsPage),
  ],
  exports: [
    PromotionDetailsPage
  ]
})
export class PromotionDetailsPageModule {}
