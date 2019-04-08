import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../models/credentials.model';
import {Store, select} from '@ngrx/store';
import { selectInProgress } from '../../store/selectors/login.selector';
import { Login } from '../../store/actions/login.actions';
import {IAppState} from '../../store/state/app.state';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'Sign-in';

  creds: Credentials = {login: '', password: ''};
  rememberMe: boolean;

  inProgress$ = this.store.pipe(select(selectInProgress));

  ngOnInit() {
  }

  constructor(private store: Store<IAppState>) {}

  onSignin(credentials: Credentials): void {
    // console.info("Signin")
    this.store.dispatch(new Login({credentials: this.creds}));
  }

}

