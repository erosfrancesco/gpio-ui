import { eventHandlers, eventNotMapped } from "./wsHandlers.ts";

const { VITE_WSPORT, VITE_WSPATH } = import.meta.env;

export const ws = new WebSocket("ws://" + VITE_WSPATH + ":" + VITE_WSPORT);

// HANDLERS
const onWSMessage = (buffer :any) => {
    // data received from ws server, like pin status
    try {
        const data = JSON.parse(buffer.data);
        const { type } = data;
        const handler = eventHandlers[type] || eventNotMapped;
        handler(ws, data);
    } catch (e) {
        console.error("Error parsing message: ", e);
    }
};

const onWSError = (e: any) => {
    console.error(e);
};

const onWSOpen = (ws) => {
    console.log('connection to node client estabilished.', ws);
};

ws.onerror = onWSError;
ws.onopen = onWSOpen;
ws.onmessage = onWSMessage;

export default ws;