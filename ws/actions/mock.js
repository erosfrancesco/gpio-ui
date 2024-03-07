const {
  VITE_WS_ACTION_SENDMESSAGE,
  VITE_WS_ACTION_PINREAD,
  VITE_WS_ACTION_PINWRITE,
} = process.env;

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

  ws.send(
    JSON.stringify({
      type: VITE_WS_ACTION_PINWRITE,
      number,
      state,
    })
  );
};

export const pinRead = (ws, { number, state }) => {
  sendToUI(ws, { message: "[MOCK] read pin: " + number });

  ws.send(
    JSON.stringify({
      type: VITE_WS_ACTION_PINREAD,
      number,
      state,
    })
  );
};
