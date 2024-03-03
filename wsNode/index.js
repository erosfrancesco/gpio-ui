import { WebSocketServer } from "ws";
import * as actions from "../config.js";
import { actionHandlers, actionNotMapped } from "./actionRouter.js";

const port = actions.wsPort;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  console.log("client connected to me!");

  ws.on("error", (e) => {
    console.error(e);
    sendToUI(ws, { error: e });
  });

  // messages received from ui
  ws.on("message", async (buffer) => {
    try {
      const data = JSON.parse(buffer);
      const { type } = data;
      const handler = actionHandlers[type] || actionNotMapped;
      handler(ws, data);
    } catch (error) {
      console.log("Error parsing message: ", buffer, error);
      sendToUI(ws, { error });
    }
  });
});

console.log("WS listening on port:", port);
