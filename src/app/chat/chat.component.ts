import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {Store, select} from '@ngrx/store';
import { selectUsers, selectUsersProgress, selectCurrentChat,
  selectUsersError, selectMessages, selectCurrentUser,
  selectConnected, selectInitLoading, selectChats,
  selectUserId } from '../../store/selectors/chat.selectors';
import { GetUsers, StartChatSuccess, IncomingMessage } from '../../store/actions/chat.actions';
import { AuthLogout } from '../../store/actions/login.actions';
import { IAppState } from '../../store/state/app.state';
import { Message, EMessageDirection } from '../../models/message.model';
import { WebsockService } from '../services/websock.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  inProgress$ = this.store.pipe(select(selectUsersProgress));
  users$ = this.store.pipe(select(selectUsers)); // TODO: remove
  currUser$ = this.store.pipe(select(selectCurrentUser)); // TODO: remove
  currChat$ = this.store.pipe(select(selectCurrentChat));
  usersError$ = this.store.pipe(select(selectUsersError));
  messages$ = this.store.pipe(select(selectMessages));
  isConnected$ = this.store.pipe(select(selectConnected));
  isInitialized$ = this.store.pipe(select(selectInitLoading));
  chats$ = this.store.pipe(select(selectChats));
  userId$ = this.store.pipe(select(selectUserId));

  msgText: string;

  constructor(private store: Store<IAppState>, private wsService: WebsockService) {}

  ngOnInit() {
    this.msgText = '';
    // this.store.dispatch(new StartChatSuccess({id: '1', userId: '1', messages: []}));
  }

  logout() {
    this.store.dispatch(new AuthLogout());
  }

  send() {
    if (this.msgText != null && this.msgText.trim() !== '') {
      // this.store.dispatch(new IncomingMessage({message:
      //  {id: '1', chatId: '1', creator: '1', text: this.msgText, dir: EMessageDirection.Incoming, ts: Date.now()} }));
      // this.messages.push(
      //   {id: '1', chatId: '1', creator: '1', text: this.msgText, dir: EMessageDirection.Incoming, ts: Date.now()}
      //   );

      const msgData = {
        id: uuid(),
        chatId: 1,
        ts: new Date().toJSON(),
        userId: 0, // may be any, server will take from JWT
        text: this.msgText
      };
      this.wsService.sendMessage(msgData);

      this.msgText = '';
    }
  }

  onChatSelect(id: string) {
    // TODO: changes current chat id
  }
}
