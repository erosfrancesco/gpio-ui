import { GPIOSlideToggleOptions } from 'interfaces/components/GPIOSlide.ts';
import { readPin, writeToPin } from 'ws/wsActions.ts'
import { GPIOAction } from 'interfaces/pinActions.ts';

// TODO: - USE STORE?
export const setGPIOState = ({ number, state }: GPIOSlideToggleOptions) => {
    writeToPin({ number, state });
}

export const getGPIOState = ({ number }: GPIOAction) => {
    readPin({ number })
}