import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GoogleMaps } from '@ionic-native/google-maps';

import { SucursalPage } from '../pages/sucursal/sucursal';
import { PromosPage } from '../pages/promos/promos';
import { SocialPage } from '../pages/social/social';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '651f4165'
  }
};

@NgModule({
  declarations: [
    MyApp,
    SucursalPage,
    PromosPage,
    SocialPage,
    PerfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SucursalPage,
    PromosPage,
    SocialPage,
    PerfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
