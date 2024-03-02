import * as actions from "../../config.js";
import ws from "./index.js";
export { actions };

type WSActionHandlerGen = (actionType :string, options :any) => void;

const WSAction :WSActionHandlerGen = (type, options) => {
  return ws.send(
    JSON.stringify({
      type,
      ...options
    })
  );
};

export interface sendMessageToNodeOptions {
  error? :string;
  message? :string;
} 
export const sendMessageToNode = (options :sendMessageToNodeOptions) => WSAction(actions.message, options);

export interface setPinStateOptions {
  state: boolean; 
  number: number;
} 
export const setPinState = (options :setPinStateOptions) => WSAction(actions.pinToggle, options);