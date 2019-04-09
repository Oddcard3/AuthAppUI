import { Message } from './message.model';

export interface Chat {
    userId: string;
    messages: Message[];
}
