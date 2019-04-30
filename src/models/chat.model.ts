import { ChatMessage } from './message.model';
import { User } from './user.model';

export interface Chat {
    id: string;
    users: User[];
    messages: ChatMessage[];
    name: string;
}
