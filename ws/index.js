import { WebSocketServer } from "ws";
import { pinToggle as pinToggleActionName, wsPort } from "../config";
import { messageAction, pinToggleAction } from "./messages";

const wss = new WebSocketServer({ port: wsPort });

wss.on("connection", (ws) => {
  console.log('client connected to me!')
  ws.on("error", (e) => {
    console.error(e);
    ws.send(messageAction({ error: e }));
  });

  ws.on("message", async (buffer) => {
    // messages received from ui

    try {
      const data = JSON.parse(buffer);

      const { type } = data;

      if (type === pinToggleActionName) {
        const { number, state } = data;
        pinToggleAction({ number, state })
        return
      }

      ws.send(messageAction({ message: 'loud and clear' }))
    } catch (error) {
      console.log("Error parsing message: ", buffer, error);
      ws.send(messageAction({ error }));
    }
  });
});

console.log("Server listening to localhost:", port);
