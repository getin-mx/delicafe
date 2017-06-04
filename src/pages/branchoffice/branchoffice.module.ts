import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchOfficePage } from './branchoffice';

@NgModule({
  declarations: [
    BranchOfficePage,
  ],
  imports: [
    IonicPageModule.forChild(BranchOfficePage),
  ],
  exports: [
    BranchOfficePage
  ]
})
export class BranchofficePageModule {}
