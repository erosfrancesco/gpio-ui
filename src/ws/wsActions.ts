import ws from "./index.ts";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINTOGGLE } = import.meta.env;

type WSActionHandlerGen = (actionType :string | undefined, options :any) => void;

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
export const sendMessageToNode = (options :sendMessageToNodeOptions) => WSAction(VITE_WS_ACTION_SENDMESSAGE, options);

interface setPinStateOptions {
  state: boolean; 
  number: number;
} 
export const setPinState = (options :setPinStateOptions) => WSAction(VITE_WS_ACTION_PINTOGGLE, options);