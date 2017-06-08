import { Component } from '@angular/core';
import { NavController, IonicPage, Loading, LoadingController, AlertController } from 'ionic-angular';

import { Auth, User, FacebookAuth } from '@ionic/cloud-angular';

import { SignUpPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials:any;
  loading: Loading;

  constructor(private nav: NavController, public auth: Auth, public user: User, private alertCtrl: AlertController,
     private loadingCtrl: LoadingController, private facebookAuth: FacebookAuth) {

    this.credentials = {"email": "", "password": ""};

  }

  login() {
    this.showLoading();
    this.auth.login('basic', this.credentials).then(() => {
        this.nav.setRoot(TabsPage);
      }, (err) => {
        this.showError(err);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesion',
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
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  createAccount(){
    this.nav.push(SignUpPage);
  }

  sendPassword(  ) {
    let prompt = this.alertCtrl.create({
      title: 'Recuperar Contraseña',
      message: "Ingrese su direccion de correo, se enviara un email con un codigo de verifiacion",
      inputs: [
        {
          name: 'email',
          placeholder: 'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            console.log(data.email);
            this.auth.requestPasswordReset(data.email);
            let passConfirmation = this.alertCtrl.create({
              title: 'Codigo confirmacion',
              message: "Ingrese el codigo de verificacion",
              inputs: [
                {
                  name: 'code',
                  placeholder: 'Codigo'
                },{
                  name: 'newPass',
                  placeholder: 'Nueva contraseña',
                  type: "password"
                }
              ],
              buttons: [
                {
                  text: 'Cancelar',
                  handler: data => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Enviar',
                  handler: data => {
                    console.log(data.code);
                    console.log(data.newPass);
                    this.auth.confirmPasswordReset(data.code, data.newPass);
                  }
                }
              ]
            });
            passConfirmation.present();
          }
        }
      ]
    });
    prompt.present();
  }

}
