import { actions } from "./wsActions.ts";

export const ws = new WebSocket("ws://localhost:" + actions.wsPort);

// ACTION HANDLERS
const messageHandler = (data :any) => {
    const { error, message } = data;

    // ERROR RECEIVED
    if (error) {
        console.error(error);
        return;
    }

    // MESSAGE RECEIVED
    console.log(message)
}
//

// HANDLERS
const onWSMessage = (buffer :any) => {
    // data received from ws server, like pin polling
    try {
        const data = JSON.parse(buffer.data);
        const { type } = data;
        
        if (type === actions.message) {
            messageHandler(data);
            return;
        }

        // 
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