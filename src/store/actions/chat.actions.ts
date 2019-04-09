import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Message } from '../../models/message.model';

export enum EChatActions {
  GetUsers = '[Chat] GetUsers',
  Users = '[Chat] Users',
  UsersError = '[Chat] UsersError',
  IncomingMessage = '[Chat] IncomingMessage'
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

    constructor(public payload: { message: Message }) {}
}

export type ChatActionTypes = GetUsers | IncomingMessage | Users | UsersError;
