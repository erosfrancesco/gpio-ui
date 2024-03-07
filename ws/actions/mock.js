const { VITE_WS_ACTION_SENDMESSAGE } = process.env;

export const sendToUI = (ws, { error, message }) => {
  ws.send(
    JSON.stringify({
      type: VITE_WS_ACTION_SENDMESSAGE,
      error,
      message,
    })
  );
};

export const pinWrite = (ws, { number, state }) => {
  sendToUI(ws, { message: "[MOCK] write " + state + " on pin: " + number });
};

export const pinRead = (ws, { number, state }) => {
  console.log("Reading", number);
  sendToUI(ws, { message: "[MOCK] read pin: " + number });
};
