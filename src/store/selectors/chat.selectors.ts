import { createSelector, State } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IChatState } from '../state/chat.state';

const selectChat = (state: IAppState) => state.chat;

export const selectUsers = createSelector(
    selectChat,
    (state: IChatState) => state.users
);

export const selectChats = createSelector(
    selectChat,
    (state: IChatState) => state.chats
);

export const selectUsersError = createSelector(
    selectChat,
    (state: IChatState) => state.loadUsersError
);

export const selectUsersProgress = createSelector(
    selectChat,
    (state: IChatState) => state.loadUsers
);

export const selectCurrentUser = createSelector(
    selectChat,
    (state: IChatState) => state.users[state.users.map(u => u.id).indexOf(state.selectedChat)]
);

export const selectCurrentChat = createSelector(
    selectChat,
    (state: IChatState) => state.chats[state.chats.map(c => c.id).indexOf(state.selectedChat)]
);

export const selectMessages = createSelector(
    selectChat,
    (state: IChatState) => state.chats.length > 0 ?
     state.chats[state.chats.map(c => c.id).indexOf(state.selectedChat)].messages : []
);

export const selectConnected = createSelector(
    selectChat,
    (state: IChatState) => state.connected
);

export const selectInitLoading = createSelector(
    selectChat,
    (state: IChatState) => state.chatsLoaded
);

export const selectUserId = createSelector(
    selectChat,
    (state: IChatState) => state.userId
);
