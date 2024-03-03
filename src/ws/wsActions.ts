import ws from "./index.ts";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

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

// interface to be redifined for read and write
interface setPinStateOptions {
  state: boolean; 
  number: number;
} 
export const writeToPin = (options :setPinStateOptions) => WSAction(VITE_WS_ACTION_PINWRITE, options);
export const readPin = (options :setPinStateOptions) => WSAction(VITE_WS_ACTION_PINREAD, options);