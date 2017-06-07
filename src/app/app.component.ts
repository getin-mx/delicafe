import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { SQLite } from 'ionic-native';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //Firebase configutarion settings
    firebase.initializeApp({
      apiKey: "AIzaSyDTPbB6y75cPvbEQ7nQptQ8evdV5ahTHWs",
      authDomain: "delicafe-d8b43.firebaseapp.com",
      databaseURL: "https://delicafe-d8b43.firebaseio.com",
      projectId: "delicafe-d8b43",
      storageBucket: "delicafe-d8b43.appspot.com",
      messagingSenderId: "664521623403"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let db = new SQLite();
      db.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {
        db.executeSql("CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, password TEXT, avatar TEXT)", {}).then((data) => {
          console.log("TABLE CREATED: ", data);
        }, (error) => {
          console.error("Unable to execute sql", error);
        })
      }, (error) => {
        console.error("Unable to open database", error);
      });
    });
  }
}
