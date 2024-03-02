import rpio from "rpio";
import { message as messageActionName } from "../config.js";

export const messageAction = ({ error, message }) => {
  return JSON.stringify({
    type: messageActionName,
    error,
    message
  });
};

export const pinToggleAction = ({ number, state }) => {
  rpio.open(number, rpio.INPUT);
  console.log('Pin ' + number + ' is currently ' + (rpio.read(number) ? 'high' : 'low'));
}