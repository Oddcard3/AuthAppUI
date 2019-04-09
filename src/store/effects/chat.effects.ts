import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { ChatService } from '../../app/services/chat.service';
import { User } from '../../models/user.model';
import { ChatActions } from '../actions';

@Injectable()
export class ChatEffects {

  @Effect()
  users$ = this.actions$.pipe(
      ofType(ChatActions.EChatActions.GetUsers),
      exhaustMap(() =>
        this.chatService.getUsers().pipe(
          map(data => {
            const users = data as User[];
            if ((users as any).error) {
              const error: any = users as any;
              return new ChatActions.UsersError({ error });
            } else {
              return new ChatActions.Users({ users });
            }
          }),
          catchError(error => of(new ChatActions.UsersError({ error })))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private chatService: ChatService,
    private router: Router
  ) {}
}
