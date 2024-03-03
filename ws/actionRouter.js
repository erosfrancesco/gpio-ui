import { sendToUI, pinWrite, pinRead, actionNotMapped } from "./mockActions.js";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = process.env;

export const actionHandlers = {
  [VITE_WS_ACTION_SENDMESSAGE]: sendToUI,
  [VITE_WS_ACTION_PINWRITE]: pinWrite,
  [VITE_WS_ACTION_PINREAD]: pinRead
};

export { actionNotMapped };
