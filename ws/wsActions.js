// import rpio from "rpio";
const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINTOGGLE } = process.env;

export const sendToUI = (ws, { error, message }) => {
  ws.send(
    JSON.stringify({
      type: VITE_WS_ACTION_SENDMESSAGE,
      error,
      message,
    })
  );
};

export const pinToggleAction = (ws, { number, state }) => {
  console.log(number, state, VITE_WS_ACTION_PINTOGGLE);
  // rpio.open(number, rpio.INPUT);
  // console.log('Pin ' + number + ' is currently ' + (rpio.read(number) ? 'high' : 'low'));
};

export const actionNotMapped = (ws, { type }) => {
  console.log("action not handled", type);
};
