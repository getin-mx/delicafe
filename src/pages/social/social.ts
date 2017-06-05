import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  socialImages:any = [
    {
      imageUri: "assets/img/redes/IMG_3892.JPG"
    },{
      imageUri: "assets/img/redes/IMG_3922.JPG"
    },{
      imageUri: "assets/img/redes/IMG_3934.JPG"
    },{
      imageUri: "assets/img/redes/IMG_3973.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4004.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4021.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4023.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4030.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4060.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4063.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4069.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4135.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4236.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4534.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4645_2.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4705.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4754.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4808.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4869.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4908.JPG"
    },{
      imageUri: "assets/img/redes/IMG_4920.JPG"
    },{
      imageUri: "assets/img/redes/IMG_5059.JPG"
    },{
      imageUri: "assets/img/redes/IMG_5091.JPG"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
