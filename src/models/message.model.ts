export enum EMessageDirection {
    Incoming = 0,
    Outgoing = 1
}

export interface Message {
    id: string;
    userId: string;
    text: string;
    dir: EMessageDirection;
    ts: Date;
}
