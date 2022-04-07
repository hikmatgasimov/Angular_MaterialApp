import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable() //for Rooter
export class AuthService {
   authsChange=new Subject<boolean>();
   private isAuthenticed=false;
   constructor(private router:Router,private afAuth:AngularFireAuth) {}
  registerUser(authData: AuthData) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email,authData.password)
    .then(result=>{
      console.log(result)
      this.authSuccessfully();
    })
    .catch(error=>{
      console.log(error);
    })
   /*  this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    }; */

  }
  login(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email,authData.password)
    .then(result=>{
      console.log(result)
      this.authSuccessfully();
    })
    .catch(error=>{
      console.log(error);
    })
  }

  logout() {

    this.authsChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticed=false;
  }

  isAuth(){
    return this.isAuthenticed;
  }
  private authSuccessfully(){
    this.isAuthenticed=true;
    this.authsChange.next(true);
    this.router.navigate(['/training']);
  }
}
