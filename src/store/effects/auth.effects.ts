import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { AuthService } from '../../app/auth-service.service'
import { Credentials } from '../../models/credentials.model'
import { Token } from '../../models/token.model'
import { AuthActions } from '../actions'
 
@Injectable()
export class AuthEffects {
 
  @Effect()
  login$ = this.actions$.pipe(
      ofType(AuthActions.EAuthActions.Login),
      map(action => (action as AuthActions.Login).payload.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map(data => {
            let token = data as Token 
            if ((token as any).error) {
              let err: any = token as any
              return new AuthActions.LoginFailure({ error: err });
            } else
              return new AuthActions.LoginSuccess({ token });
          }),
          catchError(error => of(new AuthActions.LoginFailure({ error })))
        )
      )
    );
 
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}