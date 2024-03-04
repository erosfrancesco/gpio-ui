import rpio from "rpio";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = process.env;

export const receivedMessageFromUI = (ws, { error, message }) => {
  console.log('received message', VITE_WS_ACTION_SENDMESSAGE);
};

export const pinWrite = (ws, { number, state }) => {
  console.log(VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD, number, state);
};

export const pinRead = (ws, { number, state }) => {
  console.log(VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD, number, state);
};

export const eventNotMapped = (ws, { type }) => {
  console.log("event not handled", type);
};
