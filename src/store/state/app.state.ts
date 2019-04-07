// import { RouterReducerState } from '@ngrx/router-store'
import { ILoginState, initialLoginState } from './login.state'

export interface IAppState {
    login: ILoginState
}

export const initialAppState: IAppState = {
    login: initialLoginState
};

export function getInitialState(): IAppState {
    return initialAppState
}