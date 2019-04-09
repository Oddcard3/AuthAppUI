import { ActionReducerMap } from '@ngrx/store';

// import { routerReducer } from '@ngrx/router-store'
import { IAppState } from '../state/app.state';
import { loginReducers } from './login.reducer';
import { chatReducers } from './chat.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
    login: loginReducers,
    chat: chatReducers
};
