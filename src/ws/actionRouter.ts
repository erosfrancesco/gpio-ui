import * as actions from "../../config.js";

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
  [actions.message]: messageHandler,
};

export const actionNotMapped: ActionHandler = () => {}
