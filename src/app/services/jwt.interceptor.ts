import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Store, select} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import 'rxjs/add/operator/do';
import { AuthLogout } from '../../store/actions/login.actions';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            // do stuff with response if you want
        }
        }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                this.store.dispatch(new AuthLogout());
            }
        }
        }));
    }
}
