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
    (state: IChatState) => state.users[state.users.map(u => u.id).indexOf(state.selectedUser)]
);

export const selectCurrentChat = createSelector(
    selectChat,
    (state: IChatState) => state.users[state.chats.map(c => c.userId).indexOf(state.selectedUser)]
);
