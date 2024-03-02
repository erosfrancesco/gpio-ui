import * as messages from "../../config.js";
export { messages }

export const messageAction = ({ error, message } :any) => {
  return JSON.stringify({
    type: messages.message,
    error,
    message
  });
};

export const pinToggleAction = ({ state, number } :any) => {
  return JSON.stringify({
    type: messages.pinToggle,
    state, 
    number
  });
};
