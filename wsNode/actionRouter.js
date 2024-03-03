import * as actions from "../config.js";
import { sendToUI, pinToggleAction, actionNotMapped } from "./mockActions.js";

export const actionHandlers = {
  [actions.message]: sendToUI,
  [actions.pinToggle]: pinToggleAction,
};

export { actionNotMapped };
