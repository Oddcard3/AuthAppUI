import { EAuthActions, AuthActionTypes } from '../actions/login.actions'
import { initialLoginState, ILoginState } from '../state/login.state'


export const loginReducers = (
    state = initialLoginState,
    action: AuthActionTypes
): ILoginState => {
    switch (action.type) {
        case EAuthActions.Login: {
            return {
                ...state,
                user: action.payload.credentials.login,
                inProgress: true
            };
        }
        default:
        return state;
    }
}