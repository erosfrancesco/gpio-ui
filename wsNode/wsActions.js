// import rpio from "rpio";
import { message as messageActionName } from "../config.js";

export const sendToUI = (ws, { error, message }) => {
  ws.send( 
    JSON.stringify({
      type: messageActionName,
      error,
      message
    })
  );
};

export const pinToggleAction = (ws, { number, state }) => {
  console.log(number, state)
  // rpio.open(number, rpio.INPUT);
  // console.log('Pin ' + number + ' is currently ' + (rpio.read(number) ? 'high' : 'low'));
}