import { User } from '../../models/user.model';
import { Chat } from '../../models/chat.model';

export interface IChatState {
    users: User[];
    loadUsers: boolean;
    loadUsersError: any;
    selectedUser: string;
    selectedChat: string;
    chats: Chat[];
    loadChat: boolean;
    loadChatError: any;
    messageSending: boolean;
    messageSendingError: any;
}

export const initialChatState: IChatState = {
    users: [],
    loadUsers: false,
    loadUsersError: null,
    selectedUser: null,
    selectedChat: null,
    chats: [],
    loadChat: false,
    loadChatError: null,
    messageSending: false,
    messageSendingError: null
};
