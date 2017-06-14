import { Component } from '@angular/core';
import { NavController, AlertController, Loading, LoadingController } from 'ionic-angular';

import { Auth, User, UserDetails } from '@ionic/cloud-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  credentials:UserDetails;
  loading: Loading;
  createSuccess:boolean = false;
  myDate:any;

  constructor(private nav: NavController, private alertCtrl: AlertController,
    public auth: Auth, public user: User, private loadingCtrl: LoadingController, private storage: Storage) {
    this.credentials = {"email": "", "password":"", "name":""};
  }

  public register() {
    this.showLoading();

    this.auth.signup( this.credentials ).then(() => {
      this.createSuccess = true;
      let authToken = this.auth.getToken();
      // set a key/value
      this.storage.set('authToken', authToken);
      this.storage.set('email', this.credentials.email);
      this.storage.set('password', this.credentials.password);
      this.storage.set('name', this.credentials.name);
      this.storage.set('userImge', this.user.details.image);
      this.nav.setRoot( TabsPage );
    }, (err) => {
      this.showError(err);
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Registrando usuario...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(error) {
    this.loading.dismiss();
    console.log(error);
    let message;

    switch ( error.type ){
      case 'UNPROCESSABLE ENTITY':
        message = 'Correo incorrecto';
        break;
      case 'Unauthorized':
        message = 'Correo o password incorrectos, intente de nuevo.';
        break;
      default:
        message = 'No es posible conectarse con el servidor, verifique su conexion a internet.'
        break;
    }

    let alert = this.alertCtrl.create({
      title: 'Ups!',
      subTitle: message,
      buttons: [{
        text: 'OK',
        handler: data => {
          if (this.createSuccess) {
            this.nav.popToRoot();
          }
        }
      }]
    });
    alert.present(prompt);
  }

  goToLogin() {
    this.nav.push( LoginPage );
  }

  fbRegister(){

  }

}
