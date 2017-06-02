import { Component } from '@angular/core';

import { BranchOfficePage } from "../branchoffice/branchoffice";
import { PromosPage } from "../promos/promos";
import { SocialPage } from "../social/social";
import { ProfilePage } from "../profile/profile";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  constructor() {
    this.tab1 = BranchOfficePage;
    this.tab2 = PromosPage;
    this.tab3 = SocialPage;
    this.tab4 = ProfilePage;
  }

}
