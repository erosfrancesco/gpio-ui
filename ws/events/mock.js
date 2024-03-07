import { sendToUI } from '../actions/index.js';

export const receivedMessageFromUI = (ws, { error, message }) => {
  // console.log('received message', VITE_WS_ACTION_SENDMESSAGE);
};

export const pinWrite = (ws, { number, state }) => {
  sendToUI(ws, { message: '[MOCK] write pin: ' + number });
};

export const pinRead = (ws, { number, state }) => {
  console.log('Reading', number)
  sendToUI(ws, { message: '[MOCK] read pin: ' + number });
};

export const eventNotMapped = (ws, { type }) => {
  sendToUI(ws, { message: '[MOCK] event not handled: ' + type });
};
