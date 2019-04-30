import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '../websocket';
import { WS } from './websock.events';
import {Store} from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { SetConnected, SetDisconnected, InitialChats, IncomingMessage } from '../../store/actions/chat.actions';
import { Chat } from '../../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class WebsockService {
  constructor(private store: Store<IAppState>, private wsService: WebsocketService) {
    const self = this;
    this.wsService.on<any[]>(WS.ON.CHATS).subscribe((data) => this.onChats(self, data));
    this.wsService.on<any[]>(WS.ON.MESSAGE).subscribe((data) => this.onNewMessage(self, data));

    this.wsService.status
      .subscribe((isConnected) => {

        if (isConnected) {
          this.store.dispatch(new SetConnected());
        } else {
          this.store.dispatch(new SetDisconnected());
        }
      });
  }

  createChatName(userId: string, chat: Chat) {
    for (const m of chat.users) {
      if (m.id !== userId) {
        return m.login;
      }
    }
    return chat.id;
  }

  onChats(service: WebsockService, data: any) {
    const chats = data.chats as Chat[];
    const userId = data.userId as string;
    chats.forEach((c) => {
      c.name = service.createChatName(userId, c);
    });
    for (const c of chats) {
      c.messages = c.messages.reverse();
    }

    service.store.dispatch(new InitialChats(data));
  }

  onNewMessage(service: WebsockService, message: any) {
    service.store.dispatch(new IncomingMessage(message));
    // console.log('New message: ' + JSON.stringify(message));
  }

  sendMessage(data: any) {
    this.wsService.send(WS.SEND.SEND_MSG, data);
  }
}
