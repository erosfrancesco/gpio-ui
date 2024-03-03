const { VITE_WS_ACTION_SENDMESSAGE } = import.meta.env;

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

export const actionHandlers: ActionHandlersMap = {
  [VITE_WS_ACTION_SENDMESSAGE]: messageHandler,
};

export const actionNotMapped: ActionHandler = () => {}
