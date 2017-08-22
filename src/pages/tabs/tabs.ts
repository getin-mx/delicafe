import { Component } from '@angular/core';

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

  constructor() {
    this.tab1 = PromosPage;
    this.tab2 = SocialPage;
    this.tab3 = ProfilePage;
  }

}
