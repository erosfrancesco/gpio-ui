import * as messages from "../config";
export * from '../config';

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
