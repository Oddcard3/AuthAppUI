import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Message, ChatMessage } from '../../models/message.model';
import { Chat } from '../../models/chat.model';
import { InitData } from '../../models/init-data.model';


export enum EChatActions {
  GetUsers = '[Chat] GetUsers',
  Users = '[Chat] Users',
  UsersError = '[Chat] UsersError',
  IncomingMessage = '[Chat] IncomingMessage',
  SelectUser = '[Chat] SelectUser',
  StartChat = '[Chat] StartChat',
  StartChatSuccess = '[Chat] StartChatSuccess',
  StartChatError = '[Chat] StartChatError',
  SendMessage = '[Chat] SendMessage',
  SendMessageError = '[Chat] SendMessageError',
  SendMessageSuccess = '[Chat] SendMessageSuccess',
  Connected = '[Chat] Connected',
  Disconnected = '[Chat] Disconnected',
  InitialChats = '[Chat] InitialChats',
}

export class GetUsers implements Action {
  public readonly type = EChatActions.GetUsers;

  constructor() {}
}

export class Users implements Action {
    public readonly type = EChatActions.Users;

    constructor(public payload: { users: User[] }) {}
}

export class UsersError implements Action {
    public readonly type = EChatActions.UsersError;

    constructor(public payload: { error: any }) {}
}

export class IncomingMessage implements Action {
    public readonly type = EChatActions.IncomingMessage;

    constructor(public payload: ChatMessage) {}
}

export class SelectUser implements Action {
  public readonly type = EChatActions.SelectUser;

  constructor(public payload: { userId: string }) {}
}

export class StartChatSuccess implements Action {
  public readonly type = EChatActions.StartChatSuccess;

  constructor(public payload: Chat) {}
}

export class StartChat implements Action {
  public readonly type = EChatActions.StartChat;

  constructor(public payload: { userId: string }) {}
}

export class StartChatError implements Action {
  public readonly type = EChatActions.StartChatError;

  constructor(public payload: { error: any }) {}
}

// Message sending
export class SendMessage implements Action {
  public readonly type = EChatActions.SendMessage;

  constructor(public payload: Message) {}
}

export class SendMessageError implements Action {
  public readonly type = EChatActions.SendMessageError;

  constructor(public payload: { error: any }) {}
}

export class SendMessageSuccess implements Action {
  public readonly type = EChatActions.SendMessageSuccess;

  constructor(public payload: { error: any }) {}
}

export class SetConnected implements Action {
  public readonly type = EChatActions.Connected;

  constructor() {}
}

export class SetDisconnected implements Action {
  public readonly type = EChatActions.Disconnected;

  constructor() {}
}

export class InitialChats implements Action {
  public readonly type = EChatActions.InitialChats;

  constructor(public payload: InitData) {}
}


export type ChatActionTypes =
  GetUsers | IncomingMessage |
  Users | UsersError | SelectUser |
  SendMessage | SendMessageSuccess | SendMessageError |
  StartChat | StartChatSuccess | StartChatError |
  SetConnected | SetDisconnected | InitialChats;
