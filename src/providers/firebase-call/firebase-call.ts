import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseCallProvider {

  users: FirebaseListObservable<any[]>;

  constructor(  private db:AngularFireDatabase ) {
    this.users = db.list('/user');
    console.log(this.users);
    console.log('Hello FirebaseCallProvider Provider');
  }

  getUser(){
    return this.users;
  }

}
