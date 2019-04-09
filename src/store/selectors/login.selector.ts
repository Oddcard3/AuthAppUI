import { createSelector, State } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ILoginState } from '../state/login.state';

const selectLogin = (state: IAppState) => state.login;

export const selectInProgress = createSelector(
    selectLogin,
    (state: ILoginState) => state.inProgress
);

export const selectLoggedIn = createSelector(
    selectLogin,
    (state: ILoginState) => state.loggedIn
);

export const selectToken = createSelector(
    selectLogin,
    (state: ILoginState) => state.token
);
