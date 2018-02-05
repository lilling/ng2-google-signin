import {Component, NgZone} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor(ngZone: NgZone) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  onSignIn(googleUser) {
    console.log(googleUser.getBasicProfile());
  }

  signOut() {
    const auth = gapi.auth2.getAuthInstance();
    auth.signOut().then(() => console.log('SIGNED OUT'));
  }
}
