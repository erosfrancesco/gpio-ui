import { setPinState } from '../ws/wsActions.ts'

interface GPIOSetStateAction {
    number: number
    state: boolean
}

export const setGPIOState = ({ number, state }: GPIOSetStateAction) => {
    setPinState({ number, state });
}
