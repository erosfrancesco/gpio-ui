import { WSActionHandlerGen, SendMessageToNodeOptions } from "interfaces/ws.ts";
import { getGPIOStateActionOptions, setGPIOStateActionOptions } from "interfaces/pinActions.ts";
import ws from "./index.ts";

const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

const WSAction :WSActionHandlerGen = (type, options) => {
  return ws.send(
    JSON.stringify({
      type,
      ...options
    })
  );
};

// unused for now...
export const sendMessageToNode = (options :SendMessageToNodeOptions) => WSAction(VITE_WS_ACTION_SENDMESSAGE, options);
export const writeToPin = (options :setGPIOStateActionOptions) => WSAction(VITE_WS_ACTION_PINWRITE, options);
export const readPin = (options :getGPIOStateActionOptions) => WSAction(VITE_WS_ACTION_PINREAD, options);
