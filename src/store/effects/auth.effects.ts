import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../app/auth-service.service';
import { Credentials } from '../../models/credentials.model';
import { Token } from '../../models/token.model';
import { AuthActions } from '../actions';
 
@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
      ofType(AuthActions.EAuthActions.Login),
      map(action => (action as AuthActions.Login).payload.credentials),
      exhaustMap((auth: Credentials) =>
        this.authService.login(auth).pipe(
          map(data => {
            const token = data as Token;
            if ((token as any).error) {
              const err: any = token as any;
              return new AuthActions.LoginFailure({ error: err });
            } else {
              return new AuthActions.LoginSuccess({ token });
            }
          }),
          catchError(error => of(new AuthActions.LoginFailure({ error })))
        )
      )
    );

    @Effect({ dispatch: false })
    loginSuccess$ =
        this.actions$.pipe(
          ofType(AuthActions.EAuthActions.LoginSuccess),
          map(action => (action as AuthActions.LoginSuccess).payload.token),
          tap(token => localStorage.setItem('token', token.token)),
          tap(() => this.router.navigate(['/']))
        );

    @Effect({ dispatch: false })
    loginRedirect$ =
        this.actions$.pipe(
          ofType(AuthActions.EAuthActions.LoginRedirect),
          tap(token => localStorage.removeItem('token')),
          tap(authed => {
            this.router.navigate(['/login']);
          })
    );

    @Effect({ dispatch: false })
    logout$ =
        this.actions$.pipe(
          ofType(AuthActions.EAuthActions.AuthLogout),
          tap(token => localStorage.removeItem('token')),
          tap(authed => {
            this.router.navigate(['/login']);
          })
    );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}