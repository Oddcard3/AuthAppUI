import { createSelector, State } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IChatState } from '../state/chat.state';

const selectChat = (state: IAppState) => state.chat;

export const selectUsers = createSelector(
    selectChat,
    (state: IChatState) => state.users
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
    (state: IChatState) => state.chats[state.chats.map(c => c.userId).indexOf(state.selectedChat)].messages
);

