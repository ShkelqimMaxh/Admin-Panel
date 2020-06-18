import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private afAuth: AngularFireAuth) { }
  login(email, passwod){
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, passwod).then(userData => resolve(userData), error => reject(error));
    });
  }
  register(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(userData => resolve(userData)).catch(err =>
        // @ts-ignore
        alertify.error('Wrong credentials')
      );
    });
  }
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  logout(){
    this.afAuth.signOut();
  }
}
