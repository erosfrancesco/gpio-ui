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
