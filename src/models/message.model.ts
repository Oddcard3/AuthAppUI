export enum EMessageDirection {
    Incoming = 0,
    Outgoing = 1
}


// TODO: remove
export interface Message {
    id: string;
    chatId: string;
    creator: string;
    text: string;
    dir: EMessageDirection;
    ts: number;
}

export interface ChatMessage {
    id: string;
    ts: number;
    chatId: string;
    userId: string;
    text: string;
    dir: EMessageDirection;
}
