const { VITE_WS_ACTION_SENDMESSAGE, VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = process.env;

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
  console.log(VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD, number, state);
};

export const pinRead = (ws, { number, state }) => {
  console.log(VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD, number, state);
};

export const actionNotMapped = (ws, { type }) => {
  console.log("action not handled", type);
};
