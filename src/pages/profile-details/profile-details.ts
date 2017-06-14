import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ToastController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';

import { ProfileInfoInteface } from "../../interfaces/profile-info/profile-info.interface";

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

  user:ProfileInfoInteface;
  originalUser:ProfileInfoInteface;

  constructor(public navParams: NavParams, private viewCtrl:ViewController, private camera:Camera,
    private toastCtrl:ToastController, private imagePicker:ImagePicker, private storage: Storage) {

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
    this.originalUser = this.user;
    this.viewCtrl.dismiss();
  }

  cancel(){
    this.user = this.originalUser;
    this.viewCtrl.dismiss();
  }

}
