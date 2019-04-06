import { Action } from '@ngrx/store';

export class Login implements Action {
  readonly type = 'Login';

  constructor(public payload: { username: string; password: string }) {}
}
