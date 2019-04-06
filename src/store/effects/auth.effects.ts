import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
 
@Injectable()
export class AuthEffects {
 
  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType('[Auth] Login'),
      mergeMap(() => this.authService.getAll()
        .pipe(
          map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
          catchError(() => EMPTY)
        ))
      )
    );
 
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}