import "dotenv/config";
import { WebSocketServer } from "ws";
import { eventHandlers, eventNotMapped } from "./events/index.js";
import { sendToUI } from "./actions/index.js";

const { VITE_WSPORT: port } = process.env;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  sendToUI(ws, { message: "Connected" });

  ws.on("error", (e) => {
    console.error(e);
    sendToUI(ws, { error: e });
  });

  // messages received from ui
  ws.on("message", async (buffer) => {
    try {
      const data = JSON.parse(buffer);
      const { type } = data;
      const handler = eventHandlers[type] || eventNotMapped;
      handler(ws, data);
    } catch (error) {
      console.error("Error parsing message: ", buffer, error);
      sendToUI(ws, { error });
    }
  });
});

console.log("WS listening on port:", port);
