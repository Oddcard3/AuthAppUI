import { Component, OnInit } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { selectInProgress } from '../store/selectors/login.selector';
import { Login } from '../store/actions/login.actions';
import {IAppState} from '../store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AuthAppUI';

  // inProgress$ = this.store.pipe(select(selectInProgress));

  ngOnInit() {
    //  this.store.dispatch(new Login({credentials: this.creds}));
  }

  constructor(private store: Store<IAppState>) {}
}
