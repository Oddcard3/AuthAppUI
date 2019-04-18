import { EChatActions, ChatActionTypes } from '../actions/chat.actions';
import { initialChatState, IChatState } from '../state/chat.state';
import { Message } from '../../models/message.model';
import { Chat } from '../../models/chat.model';
import { ChatActions } from '../actions';


const messagesLimit = 100;

function lastNMessages(messages: Message[], n: number): Message[] {
    if (messages.length <= n) {
        return messages;
    }
    const firstN = messages.length - n;
    return messages.filter((_, idx) => idx >= firstN);
}

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
        case EChatActions.SelectUser: {
            return {
                ...state,
                selectedUser: action.payload.userId
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
        case EChatActions.StartChat: {
            return {
                ...state,
                loadChat: true
            };
        }
        case EChatActions.StartChatError: {
            return {
                ...state,
                loadChat: false,
                loadChatError: action.payload.error
            };
        }
        case EChatActions.StartChatSuccess: {
            const chatId = action.payload.id;
            const chatIdx = state.chats.map(chat => chat.id).indexOf(chatId);
            if (chatIdx === -1) {
                return {
                    ...state,
                    loadChat: false,
                    selectedChat: chatId,
                    selectedUser: action.payload.userId,
                    chats: [...state.chats, Object.assign({}, action.payload)]
                };
            } else {
                return {
                    ...state,
                    loadChat: false,
                    selectedChat: chatId,
                    selectedUser: action.payload.userId, // TODO: fix code duplication with if branch
                    chats: state.chats.map(
                        (c, idx) => idx !== chatIdx ?
                        c :
                        Object.assign({}, action.payload)
                    )
                };
            }
        }
        case EChatActions.SendMessage: {
            return {
                ...state,
                messageSending: true
            };
        }
        case EChatActions.SendMessageError: {
            return {
                ...state,
                messageSending: false,
                messageSendingError: action.payload.error
            };
        }
        case EChatActions.IncomingMessage: {
            const chatId = action.payload.message.chatId;
            const chatIdx = state.chats.map(chat => chat.id).indexOf(chatId);
            if (chatIdx === -1) {
                // TODO: error!
                return state;
            } else {
                return {
                    ...state,
                    chats: state.chats.map(
                        (c, idx) => idx !== chatIdx ?
                        c :
                        Object.assign({}, c, {
                            messages: lastNMessages([...c.messages, action.payload.message], messagesLimit)
                        })
                    )
                };
            }
        }
        default:
        return state;
    }
}