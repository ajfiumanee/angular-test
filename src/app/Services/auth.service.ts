import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { User, UserCreating } from '../Models/user.model';
import { randomPassword } from '../shared/randomPassword';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {

      console.log(user);

      this.setLocalStorage(user);
    })
  }

  setLocalStorage(user: any) {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user'));
    } else {
      localStorage.setItem('user', null);
      JSON.parse(localStorage.getItem('user'));
    }
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        this.setLocalStorage(result);
        if (this.isLoggedIn !== true) {
          window.alert("Você não está logado");
          this.router.navigate(['/login']);
        } else if (this.isEmailVerifeid !== true) {
          window.alert("Você não verificou seu email ainda!");
          this.router.navigate(['/verify-email']);
        } else {
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
        }
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  // Sign up with email/password MANUAL
  registerUser(user: UserCreating) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.Email, randomPassword())
      .then((result) => {
        user.Uid = result.user.uid;
        this.setUser(user);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('E-mail de redefinição de senha enviado, verifique sua caixa de entrada.');
      }).catch((error) => {
        window.alert(error);
      })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  get isEmailVerifeid(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        })
        this.SetUserData(result.user);
        this.setLocalStorage(result);
      }).catch((error) => {
        window.alert(error);
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  setUser(user: UserCreating) {

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.Uid}`);
    const userData: UserCreating = {
      ...user
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.userData = null;
      this.router.navigate(['/login']);
    });
  }

}