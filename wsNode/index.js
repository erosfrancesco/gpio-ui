import { WebSocketServer } from "ws";
import * as actions from "../config.js";
import { sendToUI, pinToggleAction } from "./wsActions.js";

const port = actions.wsPort
const wss = new WebSocketServer({ port });

console.log(actions.pinToggle)

wss.on("connection", (ws) => {
  console.log('client connected to me!')
  ws.on("error", (e) => {
    console.error(e);
    sendToUI(ws, { error: e });
  });

  ws.on("message", async (buffer) => {
    // messages received from ui
    try {
      const data = JSON.parse(buffer);

      const { type } = data;

      if (type === actions.pinToggle) {
        pinToggleAction(ws, data);
        return
      }

      sendToUI(ws, { message: 'loud and clear' });
    } catch (error) {
      console.log("Error parsing message: ", buffer, error);
      sendToUI(ws, { error });
    }
  });
});

console.log("Server listening to localhost:", port);
