import { EAuthActions, AuthActionTypes } from '../actions/login.actions'
import { initialLoginState, ILoginState } from '../state/login.state'


// export const loginReducers = (
//     state = initialLoginState,
//     action: AuthActionTypes
// ): ILoginState => {
//     switch (action.type) {
//         case EAuthActions.Login: {
//             return {
//                 ...state,
//                 user: action.payload.credentials.login,
//                 inProgress: true
//             };
//         }
//         case EAuthActions.LoginSuccess: {
//             return {
//                 ...state,
//                 token: action.payload.token.token,
//                 loggedIn: true
//             };
//         }
//         case EAuthActions.AuthLogout: {
//             return {
//                 ...state,
//                 token: null,
//                 loggedIn: false
//             };
//         }
//         default:
//         return state;
//     }
// };

export function loginReducers(state = initialLoginState, action: AuthActionTypes): ILoginState {
    switch (action.type) {
        case EAuthActions.Login: {
            return {
                ...state,
                user: action.payload.credentials.login,
                inProgress: true
            };
        }
        case EAuthActions.LoginSuccess: {
            return {
                ...state,
                token: action.payload.token.token,
                loggedIn: true
            };
        }
        case EAuthActions.AuthLogout: {
            return {
                ...state,
                token: null,
                loggedIn: false
            };
        }
        default:
        return state;
    }
}
