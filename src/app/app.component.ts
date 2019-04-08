import { Component } from '@angular/core';
import { Credentials } from '../models/credentials.model'
import {Store, select} from '@ngrx/store'
import { selectInProgress } from '../store/selectors/login.selector'
import { Login } from '../store/actions/login.actions'
import {IAppState} from '../store/state/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AuthAppUI';

  creds: Credentials = {login: '', password: ''};
  rememberMe: boolean;

  ngOnInit() {
  }

  inProgress$ = this._store.pipe(select(selectInProgress));

  constructor(private _store: Store<IAppState>) {}

  onSignin(credentials: Credentials): void {
    console.info("Signin")
    this._store.dispatch(new Login({credentials: this.creds}))
  }
}
