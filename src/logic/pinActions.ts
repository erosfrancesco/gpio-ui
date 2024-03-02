import { ws } from '../ws/client.ts';
import { pinToggleAction } from '../ws/messages.ts'

const sendActionToWs = ({ number, state }: GPIOSetStateAction) => {
    ws.send(pinToggleAction({ number, state }))
}


interface GPIOSetStateAction {
    number: number
    state: boolean
}

export const setGPIOState = ({ number, state }: GPIOSetStateAction) => {
    sendActionToWs({ number, state })
}
