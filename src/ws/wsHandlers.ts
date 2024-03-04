import { WSEventHandlersMap, WSEventHandler } from "interfaces/ws";

const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

const messageHandler: WSEventHandler = (_, data :any) => {
  const { error, message } = data;

  // ERROR RECEIVED
  if (error) {
      console.error(error);
      return;
  }

  // MESSAGE RECEIVED
  console.log(message)
}

export const eventNotMapped: WSEventHandler = () => {}

export const eventHandlers: WSEventHandlersMap = {
  [VITE_WS_ACTION_SENDMESSAGE]: messageHandler,
  [VITE_WS_ACTION_PINWRITE]: eventNotMapped,
  [VITE_WS_ACTION_PINREAD]: eventNotMapped,
};