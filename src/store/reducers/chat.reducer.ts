import { EChatActions, ChatActionTypes } from '../actions/chat.actions';
import { initialChatState, IChatState } from '../state/chat.state';
import { ChatActions } from '../actions';


export const chatReducers = (
    state = initialChatState,
    action: ChatActionTypes
): IChatState => {
    switch (action.type) {
        case EChatActions.GetUsers: {
            return {
                ...state,
                loadUsers: true
            };
        }
        case EChatActions.Users: {
            return {
                ...state,
                users: action.payload.users,
                loadUsers: false,
                loadUsersError: ''
            };
        }
        case EChatActions.UsersError: {
            return {
                ...state,
                loadUsers: false,
                loadUsersError: action.payload.error
            };
        }
        case EChatActions.IncomingMessage: {
            const userId = action.payload.message.userId;
            const chatIdx = state.chats.map(chat => chat.userId).indexOf(userId);
            if (chatIdx === -1) {
                return {
                    ...state,
                    chats: [...state.chats, {userId, messages: [action.payload.message]}]
                };
            } else {
                let chat = state.chats[chatIdx];
                chat = {...chat, messages: [...chat.messages, action.payload.message]};

                return {
                    ...state,
                    chats: state.chats.map(
                        (c, idx) => idx !== chatIdx ?
                        c :
                        Object.assign({}, c, {
                            messages: [...c.messages, action.payload.message]
                        })
                    )
                };
            }
        }
        default:
        return state;
    }
}