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

export type ActionHandler = (ws: WebSocket, data: any) => void;
export interface ActionHandlersMap {
  [key: string]: ActionHandler
}