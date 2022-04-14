import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fbAuth: AngularFireAuth,
    private ngZone: NgZone,
    private router: Router
  ) {
    this.fbAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user);
      }
    });
  }

  signIn(email: string, password: string) {
    return this.fbAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signUp(email: string, password: string) {
    return this.fbAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  logOut() {
    return this.fbAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
