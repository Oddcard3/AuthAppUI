import { Message } from './message.model';

export interface Chat {
    id: string;
    userId: string;
    messages: Message[];
}
