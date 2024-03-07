export type WSActionHandlerGen = (actionType :string | undefined, options :any) => void;

export interface SendMessageToNodeOptions {
  error? :string;
  message? :string;
};

export type WSActionHandler = (ws: WebSocket, data: any) => void;

export type WSEventHandler = (ws: WebSocket, data: any) => void;
export interface WSEventHandlersMap {
  [key: string]: WSEventHandler
}