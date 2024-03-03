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
  console.log(VITE_WS_ACTION_PINTOGGLE, number, state);
};

export const actionNotMapped = (ws, { type }) => {
  console.log("action not handled", type);
};
