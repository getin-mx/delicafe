import { Component } from '@angular/core';
import { NavController, IonicPage, Loading, LoadingController, AlertController } from 'ionic-angular';

import { Auth, User, FacebookAuth } from '@ionic/cloud-angular';
import { SQLite } from "ionic-native";

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

  database: SQLite;

  constructor(private nav: NavController, public auth: Auth, public user: User, private alertCtrl: AlertController,
     private loadingCtrl: LoadingController, private facebookAuth: FacebookAuth) {

    this.credentials = {"email": "", "password": ""};
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
      console.log(this.database);
    }, (error) => {
      console.log("ERROR: ", error);
    });
    this.autoLogin();
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

  autoLogin() {
    this.database.executeSql("SELECT * FROM people", []).then((data) => {
      console.log(data);
      if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
          this.credentials.email = data.rows.item(i).email;
          this.credentials.password = data.rows.item(i).password;
        }
        this.login();
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

}
