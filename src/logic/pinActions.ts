import { GPIOSlideToggleOptions } from 'interfaces/components/GPIOSlide.ts';
import { readPin } from '../ws/wsActions.ts'

export const setGPIOState = ({ number, state }: GPIOSlideToggleOptions) => {
    readPin({ number, state });
}
