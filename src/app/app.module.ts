import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BranchOfficePage } from '../pages/branchoffice/branchoffice';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PromosPage } from '../pages/promos/promos';
import { SignUpPage } from '../pages/signup/signup';
import { SocialPage } from '../pages/social/social';
import { TabsPage } from "../pages/tabs/tabs";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BranchOfficePage,
    LoginPage,
    ProfilePage,
    PromosPage,
    SignUpPage,
    SocialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFfe5_ZgKIGVbWRuokOwCMtKmeOVwm4ok'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BranchOfficePage,
    LoginPage,
    ProfilePage,
    PromosPage,
    SignUpPage,
    SocialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
