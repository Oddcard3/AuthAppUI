import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {Store, select} from '@ngrx/store';
import { selectUsers, selectUsersProgress,
  selectUsersError, selectMessages, selectCurrentUser } from '../../store/selectors/chat.selectors';
import { GetUsers, StartChatSuccess, IncomingMessage } from '../../store/actions/chat.actions';
import { AuthLogout } from '../../store/actions/login.actions';
import { IAppState } from '../../store/state/app.state';
import { Message, EMessageDirection } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  inProgress$ = this.store.pipe(select(selectUsersProgress));
  users$ = this.store.pipe(select(selectUsers));
  currUser$ = this.store.pipe(select(selectCurrentUser));
  usersError$ = this.store.pipe(select(selectUsersError));
  messages$ = this.store.pipe(select(selectMessages));

  msgText: string;

  messages: Message[] = [
    {id: '1', chatId: '1', creator: '1', text: 'Hello', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'How are you?', dir: EMessageDirection.Outgoing, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'Hi, good, thanks, how do you do?', dir: EMessageDirection.Outgoing, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'Fine, I\'m at home', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'Maybe you want to come...?', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1',
      text: 'Great idea, I can drive to you right now!', dir: EMessageDirection.Outgoing, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()},
    {id: '1', chatId: '1', creator: '1', text: 'OK! See you soon!', dir: EMessageDirection.Incoming, ts: Date.now()}
  ];

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.msgText = '';
    this.store.dispatch(new StartChatSuccess({id: '1', userId: '1', messages: []}));
    this.store.dispatch(new GetUsers());
  }

  logout() {
    this.store.dispatch(new AuthLogout());
  }

  send() {
    if (this.msgText != null && this.msgText.trim() !== '') {
      this.store.dispatch(new IncomingMessage({message:
        {id: '1', chatId: '1', creator: '1', text: this.msgText, dir: EMessageDirection.Incoming, ts: Date.now()} }));
      // this.messages.push(
      //   {id: '1', chatId: '1', creator: '1', text: this.msgText, dir: EMessageDirection.Incoming, ts: Date.now()}
      //   );
      this.msgText = '';
    }
  }

  onUserSelect(id: string) {
    // starts chat with user
  }
}
