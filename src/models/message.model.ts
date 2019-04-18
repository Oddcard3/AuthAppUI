export enum EMessageDirection {
    Incoming = 0,
    Outgoing = 1
}

export interface Message {
    id: string;
    chatId: string;
    creator: string;
    text: string;
    dir: EMessageDirection;
    ts: number;
}
