import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//libraries from npm
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';
import { CloudModule } from '@ionic/cloud-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BranchOfficePage } from '../pages/branchoffice/branchoffice';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { PromosPage } from '../pages/promos/promos';
import { SignUpPage } from '../pages/signup/signup';
import { SocialPage } from '../pages/social/social';
import { TabsPage } from "../pages/tabs/tabs";
import { PromotionDetailsPage } from "../pages/promotion-details/promotion-details";
import { ProfileDetailsPage } from "../pages/profile-details/profile-details";
import { IonicImageViewerModule } from 'ionic-img-viewer';
//Services, providers and configuration files
import { cloudSettings } from "../config/cloudSettings.config";
import { storage } from "../config/storage.config";
import { PlaceholderPipe } from '../pipes/placeholder/placeholder';
import { SafePipe } from '../pipes/safe/safe';

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
    TabsPage,
    PlaceholderPipe,
    PromotionDetailsPage,
    ProfileDetailsPage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot( storage ),
    IonicImageViewerModule,
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
    TabsPage,
    PromotionDetailsPage,
    ProfileDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
  ]
})
export class AppModule {}
