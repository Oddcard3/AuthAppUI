// import { RouterReducerState } from '@ngrx/router-store'
import { ILoginState, initialLoginState } from './login.state';
import { IChatState, initialChatState } from './chat.state';

export interface IAppState {
    login: ILoginState;
    chat: IChatState;
}

export const initialAppState: IAppState = {
    login: initialLoginState,
    chat: initialChatState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
