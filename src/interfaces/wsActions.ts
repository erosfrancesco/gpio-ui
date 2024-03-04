export type WSActionHandlerGen = (actionType :string | undefined, options :any) => void;

export interface SendMessageToNodeOptions {
    error? :string;
    message? :string;
};

// interface to be redifined for read and write
export interface SetPinStateOptions {
    state: boolean; 
    number: number;
}

export type WSActionHandler = (ws: WebSocket, data: any) => void;
export interface WSActionHandlersMap {
  [key: string]: WSActionHandler
}

export type WSEventHandler = (ws: WebSocket, data: any) => void;
export interface WSEventHandlersMap {
  [key: string]: WSEventHandler
}