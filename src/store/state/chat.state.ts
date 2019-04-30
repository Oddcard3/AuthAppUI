import { User } from '../../models/user.model';
import { Chat } from '../../models/chat.model';

export interface IChatState {
    userId: string;
    users: User[];
    loadUsers: boolean;
    loadUsersError: any;
    selectedUser: string;
    selectedChat: string;
    chats: Chat[];
    loadChat: boolean; // TODO: remove
    loadChatError: any;
    messageSending: boolean;
    messageSendingError: any;
    loadChats: boolean;
    loadChatsError: any;
    chatsLoaded: boolean;
    connected: boolean;
}

export const initialChatState: IChatState = {
    userId: '',
    users: [],
    loadUsers: false,
    loadUsersError: null,
    selectedUser: null,
    selectedChat: null,
    chats: [],
    loadChat: false,
    loadChatError: null,
    messageSending: false,
    messageSendingError: null,
    loadChats: false,
    loadChatsError: null,
    chatsLoaded: false,
    connected: false
};
