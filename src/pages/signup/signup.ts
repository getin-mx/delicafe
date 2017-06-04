import { Component } from '@angular/core';
import { NavController, AlertController, Loading, LoadingController } from 'ionic-angular';

import { Auth, User, UserDetails } from '@ionic/cloud-angular';

import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  credentials:UserDetails;
  loading: Loading;
  createSuccess:boolean = false;

  constructor(private nav: NavController, private alertCtrl: AlertController, public auth: Auth, public user: User, private loadingCtrl: LoadingController) {
    this.credentials = {"email": "", "password":"", "name":""};
  }

  public register() {
    this.showLoading();
    console.log(this.credentials);

    this.auth.signup( this.credentials ).then(() => {
      console.log(this.auth);
      this.createSuccess = true;
      this.auth.login('basic', {"email":this.credentials.email, "password":this.credentials.password}).then(() => {
        this.nav.setRoot( TabsPage );
      });

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

}
