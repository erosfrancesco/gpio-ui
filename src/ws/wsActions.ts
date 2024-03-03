import * as actions from "../../config.js";
import ws from "./index.ts";

type WSActionHandlerGen = (actionType :string, options :any) => void;

const WSAction :WSActionHandlerGen = (type, options) => {
  return ws.send(
    JSON.stringify({
      type,
      ...options
    })
  );
};

interface sendMessageToNodeOptions {
  error? :string;
  message? :string;
} 
// unused for now...
export const sendMessageToNode = (options :sendMessageToNodeOptions) => WSAction(actions.message, options);

interface setPinStateOptions {
  state: boolean; 
  number: number;
} 
export const setPinState = (options :setPinStateOptions) => WSAction(actions.pinToggle, options);