import { actionHandlers, actionNotMapped } from "./actionRouter.ts";

const { VITE_WSPORT, VITE_WSPATH } = import.meta.env;

export const ws = new WebSocket("ws://" + VITE_WSPATH + ":" + VITE_WSPORT);

// HANDLERS
const onWSMessage = (buffer :any) => {
    // data received from ws server, like pin status
    try {
        const data = JSON.parse(buffer.data);
        const { type } = data;
        const handler = actionHandlers[type] || actionNotMapped;
        handler(ws, data);
    } catch (e) {
        console.log("Error parsing message: ", e);
    }
};

const onWSError = (e: any) => {
    console.error(e);
};

const onWSOpen = () => {
    console.log('connection to node client estabilished.');
};

ws.onerror = onWSError;
ws.onopen = onWSOpen;
ws.onmessage = onWSMessage;

export default ws;