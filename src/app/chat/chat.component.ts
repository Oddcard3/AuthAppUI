import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {Store, select} from '@ngrx/store';
import { selectUsers, selectUsersProgress, selectUsersError } from '../../store/selectors/chat.selectors';
import { GetUsers } from '../../store/actions/chat.actions';
import { AuthLogout } from '../../store/actions/login.actions';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  inProgress$ = this.store.pipe(select(selectUsersProgress));
  users$ = this.store.pipe(select(selectUsers));
  usersError$ = this.store.pipe(select(selectUsersError));

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  logout() {
    this.store.dispatch(new AuthLogout());
  }
}
