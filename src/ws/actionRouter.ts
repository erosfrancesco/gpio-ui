const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

type ActionHandler = (ws: WebSocket, data: any) => void;
interface ActionHandlersMap {
  [key: string]: ActionHandler
}

const messageHandler: ActionHandler = (_, data :any) => {
  const { error, message } = data;

  // ERROR RECEIVED
  if (error) {
      console.error(error);
      return;
  }

  // MESSAGE RECEIVED
  console.log(message)
}

export const actionNotMapped: ActionHandler = () => {}

export const actionHandlers: ActionHandlersMap = {
  [VITE_WS_ACTION_SENDMESSAGE]: messageHandler,
  [VITE_WS_ACTION_PINWRITE]: actionNotMapped,
  [VITE_WS_ACTION_PINREAD]: actionNotMapped,
};