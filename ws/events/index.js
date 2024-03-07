import {
  handleMessageFromUI,
  handlePinWrite,
  handlePinRead,
  eventNotMapped,
} from "./events.js";
const {
  VITE_WS_ACTION_SENDMESSAGE,
  VITE_WS_ACTION_PINWRITE,
  VITE_WS_ACTION_PINREAD,
} = process.env;

export const eventHandlers = {
  [VITE_WS_ACTION_SENDMESSAGE]: handleMessageFromUI,
  [VITE_WS_ACTION_PINWRITE]: handlePinWrite,
  [VITE_WS_ACTION_PINREAD]: handlePinRead,
};

export { eventNotMapped };
