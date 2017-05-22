import { Component } from '@angular/core';

import { SucursalPage } from '../sucursal/sucursal';
import { PromosPage } from '../promos/promos';
import { SocialPage } from '../social/social';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SucursalPage;
  tab2Root = PromosPage;
  tab3Root = SocialPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
