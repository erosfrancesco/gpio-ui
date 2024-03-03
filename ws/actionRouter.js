import { sendToUI, pinToggleAction, actionNotMapped } from "./mockActions.js";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINTOGGLE } = process.env;

export const actionHandlers = {
  [VITE_WS_ACTION_SENDMESSAGE]: sendToUI,
  [VITE_WS_ACTION_PINTOGGLE]: pinToggleAction,
};

export { actionNotMapped };
