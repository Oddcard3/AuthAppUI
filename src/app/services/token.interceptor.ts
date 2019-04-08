import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Store, select} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import { selectToken } from '../../store/selectors/login.selector';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string;
    this.store.select(selectToken).subscribe((t) => { token = t; });
    if (!token) {
        return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request);
  }
}
