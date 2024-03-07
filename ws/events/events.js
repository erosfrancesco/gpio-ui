import { pinRead, pinWrite, sendToUI } from "../actions/index.js";
const { VITE_WS_ACTION_SENDMESSAGE } = process.env;

export const handleMessageFromUI = (ws, { error, message }) => {
};

export const handlePinWrite = (ws, { number, state }) => {
  pinWrite(ws, { number, state });
};

export const handlePinRead = (ws, { number, state }) => {
  pinRead(ws, { number, state });
};

export const eventNotMapped = (ws, { type }) => {
  sendToUI(ws, { message: "Event not handled: " + type });
};
