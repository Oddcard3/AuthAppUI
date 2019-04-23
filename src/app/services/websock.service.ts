import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebsocketService } from '../websocket';
import { WS } from './websock.events';



@Injectable({
  providedIn: 'root'
})
export class WebsockService {
  constructor(private wsService: WebsocketService) {
    this.wsService.on<any[]>(WS.ON.CHATS).subscribe(this.onChats);
    this.wsService.on<any[]>(WS.ON.CHATS).subscribe(this.onNewMessage);
  }

  onChats(chats: any[]) {
    console.log('Chats: ' + chats);
  }

  onNewMessage(message: any[]) {
    console.log('New message: ' + message);
  }

  sendMessge(msg: string) {
    this.wsService.send(WS.SEND.SEND_MSG, msg);
  }
}
