import { User } from '../../models/user.model';
import { Chat } from '../../models/chat.model';

export interface IChatState {
    users: User[];
    loadUsers: boolean;
    loadUsersError: any;
    selectedUser: string;
    chats: Chat[];
}

export const initialChatState: IChatState = {
    users: [],
    loadUsers: false,
    loadUsersError: null,
    selectedUser: null,
    chats: []
};
