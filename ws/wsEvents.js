import { receivedMessageFromUI, pinWrite, pinRead, eventNotMapped } from "./events/mock.js";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = process.env;

export const eventHandlers = {
  [VITE_WS_ACTION_SENDMESSAGE]: receivedMessageFromUI,
  [VITE_WS_ACTION_PINWRITE]: pinWrite,
  [VITE_WS_ACTION_PINREAD]: pinRead
};

export { eventNotMapped };
