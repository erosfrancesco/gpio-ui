import { message as messageActionName } from "../config.js";

export const sendToUI = (ws, { error, message }) => {
  ws.send(
    JSON.stringify({
      type: messageActionName,
      error,
      message,
    })
  );
};

export const pinToggleAction = (ws, { number, state }) => {
  console.log(number, state);
};

export const actionNotMapped = (ws, { type }) => {
  console.log("action not handled", type);
};
