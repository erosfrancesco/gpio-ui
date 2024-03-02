import { messageAction, messages } from "./messages.ts";

export const ws = new WebSocket("ws://localhost:" + messages.wsPort);

// HANDLERS
const onWSOpen = () => {
    console.log('connection extabilished')
    setTimeout(() => {
        console.log('send message')
        ws.send(messageAction({ message: 'hello world'}));
    }, 2000)
};

// data received from ws server, like pin polling
const onWSMessage = (buffer :any) => {
    try {
        const data = JSON.parse(buffer.data);
        const { type, ...args } = data;
        
        if (type !== messages.message) {
            return;
        }

        const { error, message } = args;

        // ERROR RECEIVED
        if (error) {
            console.error(error);
            return;
        }

        // MESSAGE RECEIVED
        console.log(message)
    } catch (e) {
        console.log("Error parsing message: ", e);
    }
};

const onWSError = (e: any) => {
    console.error(e);
};

ws.onerror = onWSError;
ws.onopen = onWSOpen;
ws.onmessage = onWSMessage;

export default ws;