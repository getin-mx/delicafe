import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  password:string;
  phUser:string = "Usuario";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.user);
  }

  login(user:string, password:string){
    let isValidEmail = this.ValidateEmail(user);
    if (isValidEmail){
      if(user=="demo@getin.mx" && password=="admin01"){
        this.navCtrl.push( TabsPage );
      }
    }else{
      this.user="";
      this.phUser = "Ususario incorrecto, intente de nuevo";
    }
  }

  private ValidateEmail( mail:string ) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false)
  }

  forgotPassword(){
    console.log("Se olvido el password");
  }

}
