import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginRedirect } from '../../store/actions/login.actions';
import { selectLoggedIn } from '../../store/selectors/login.selector';
import {IAppState} from '../../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
