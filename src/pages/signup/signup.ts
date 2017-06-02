import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  user:string;
  password:string;
  email:string;
  phUser:string = "Usuario";
  phMail:string = "Correo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = "";
    this.password = "";
    this.email = "";
  }

  login(user:string, password:string, email:string){
    let isValidEmail = this.ValidateEmail(user);
    if (isValidEmail){
      if(user=="demo@getin.mx" && password=="admin01"){
        this.navCtrl.push( TabsPage );
      }
    }else{
      this.user="";
      this.phUser = "Ususario incorrecto, intente de nuevo";
      this.email = "";
      this.phMail = "Correo invalido, por favor ingrese otro";
    }
  }

  private ValidateEmail( mail:string ) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false)
  }

  loginFacebook(){
    
  }


}
