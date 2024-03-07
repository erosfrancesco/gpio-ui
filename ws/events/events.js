import { pinRead, pinWrite, sendToUI } from "../actions/index.js";

export const handleMessageFromUI = (ws, { error, message }) => {
  
};

export const handlePinWrite = (ws, { number, state }) => {
  pinWrite(ws, { number, state });
};

export const handlePinRead = (ws, { number }) => {
  pinRead(ws, { number });
};

export const eventNotMapped = (ws, { type }) => {
  sendToUI(ws, { message: "Event not handled: " + type });
};
