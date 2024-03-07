export type WSActionHandlerGen = (
  actionType: string | undefined,
  options: any
) => void;

export interface SendMessageToNodeOptions {
  error?: string;
  message?: string;
}

export type WSActionHandler = (ws: WebSocket, data: any) => void;

export type WSEventHandler = (ws: WebSocket, data: any) => void;
export interface WSEventHandlersMap {
  [key: string]: WSEventHandler;
}

//
export interface WSMessageStoreState {
  pool: string[];
}

export interface WSMessageStore extends WSMessageStoreState {
  save: (newMessage: string) => void;
  reset: () => void;
}
