import { Action } from '@ngrx/store';

// import { createAction, props, union } from '@ngrx/store';
import { Credentials } from '../../models/credentials.model';
import { Token } from '../../models/token.model';

export enum EAuthActions {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
  AuthLogout = '[Auth] Logout'
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;

  constructor(public payload: { credentials: Credentials }) {}
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LoginSuccess;

  constructor(public payload: { token: Token }) {}
}

export class LoginFailure implements Action {
  public readonly type = EAuthActions.LoginFailure;

  constructor(public payload: { error: any }) {}
}

export class LoginRedirect implements Action {
  public readonly type = EAuthActions.LoginRedirect;
}

export class AuthLogout implements Action {
  public readonly type = EAuthActions.AuthLogout;
}

export type AuthActionTypes = Login | LoginSuccess | LoginFailure | LoginRedirect | AuthLogout;


// export const login = createAction(
//   '[Auth] Login',
//   props<{ credentials: Credentials }>()
// );

// export const loginSuccess = createAction(
//   '[Auth] Login Success',
//   props<{ user: Token }>()
// );

// export const loginFailure = createAction(
//   '[Auth] Login Failure',
//   props<{ error: any }>()
// );

// export const loginRedirect = createAction('[Auth] Login Redirect');

// This is an alternative to union() type export. Work great when you need
// to export only a single Action type.
// export type AuthActionsUnion = ReturnType<
// typeof login | typeof loginSuccess | typeof loginFailure | typeof loginRedirect
// >;
