import { WSActionHandler, WSActionHandlersMap } from "interfaces/wsActions";

const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

const messageHandler: WSActionHandler = (_, data :any) => {
  const { error, message } = data;

  // ERROR RECEIVED
  if (error) {
      console.error(error);
      return;
  }

  // MESSAGE RECEIVED
  console.log(message)
}

export const eventNotMapped: WSActionHandler = () => {}

export const eventHandlers: WSActionHandlersMap = {
  [VITE_WS_ACTION_SENDMESSAGE]: messageHandler,
  [VITE_WS_ACTION_PINWRITE]: eventNotMapped,
  [VITE_WS_ACTION_PINREAD]: eventNotMapped,
};