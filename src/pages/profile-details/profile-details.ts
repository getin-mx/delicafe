import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController, NavController, AlertController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';
import { User, Auth } from '@ionic/cloud-angular';

import { ProfileInfoInteface } from "../../interfaces/profile-info/profile-info.interface";
import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

  user:ProfileInfoInteface;
  originalUser:ProfileInfoInteface;
  showUserInfo:boolean = true;
  showChangePassword:boolean = false;
  showPrivacy:boolean = false;
  showConditions:boolean = false;

  originalPassword:string;
  newPassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController, private camera:Camera, private auth:Auth,
    private toastCtrl:ToastController, private imagePicker:ImagePicker, private storage: Storage, private alertCtrl:AlertController, public usuario: User) {

    this.user = navParams.get('user');
    this.originalUser = this.user;

  }

  showCamera(){
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.user.userImge = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
     // Handle error
     this.showToast( "Error: " + err );
     console.error("Camera error: ", err);
    });
  }

  selectImage() {

    let options: ImagePickerOptions = {
      maximumImagesCount: 1,
       quality: 60,
       outputType: 1
    };

    this.imagePicker.getPictures(options).then((results) => {

      for(let img of results){
        this.user.userImge = 'data:image/jpeg;base64,' + img;
      }

    }, (err) => {
      this.showToast( "Error select images: " + err );
      console.error( "Error selectImage: ", JSON.stringify( err ) );
    });
  }

  private showToast( text:string ) {
    this.toastCtrl.create({
      message: text,
      duration: 2500
    }).present();
  }

  save(){
    this.storage.set('userImge', this.user.userImge);
    this.storage.set('name', this.user.name);
    this.storage.set('email', this.user.email);
    this.storage.set('birthday', this.user.birthday);
    this.usuario.details.image = this.user.userImge;
    this.usuario.details.name = this.user.name;
    this.usuario.details.email = this.user.email;
    this.originalUser = this.user;
    this.usuario.save();
    this.viewCtrl.dismiss();
  }

  cancel(){
    this.user = this.originalUser;
    this.viewCtrl.dismiss();
  }

  userInfo() {
    this.showUserInfo = !this.showUserInfo;
    this.showPrivacy = false;
    this.showConditions = false;
    this.showChangePassword = false;
  }

  showChangePasswordF(){
    this.showUserInfo = false;
    this.showPrivacy = false;
    this.showConditions = false;
    this.showChangePassword = !this.showChangePassword;
  }

  changePassword() {
    if (this.originalPassword == this.user.password){
      this.usuario.details.password = this.newPassword;
      this.usuario.save();
      this.user.password = this.newPassword;
      this.newPassword = null;
      this.showToast("Contraseña actualizada");
    }else {
      this.showToast("No coincide la contraseña original");
    }
  }

  goToPrivacy() {
    this.showUserInfo = false;
    this.showPrivacy = !this.showPrivacy;
    this.showConditions = false;
    this.showChangePassword = false;
  }

  goToConditions() {
    this.showUserInfo = false;
    this.showPrivacy = false;
    this.showConditions = !this.showConditions;
    this.showChangePassword = false;
  }

  closeSesion() {
    this.storage.clear();
    this.auth.logout();
    this.navCtrl.setRoot(HomePage);
  }

}
