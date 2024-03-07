import { useEffect, useState } from 'preact/hooks';

import { setGPIOState } from "logic/pinActions.ts"; // TODO: - use store?
import { useBoardPins } from 'logic/board.ts'
import GPIOSlide from "../UI/GPIOSlide.tsx";
import { PinOptionsType } from "interfaces/pin.ts";
import { BoardPinProps } from "interfaces/components/BoardPin.ts";

function BoardPinActions({ pin }: BoardPinProps) {
    const pins = useBoardPins();
    const { number, type } = pin;

    const [pinNumber, setPinNumber] = useState(0);
    const [pinState, setPinState] = useState(false);
    
    useEffect(() => {
        const { number, type } = pin;
        const pinState = pins.pins[number];
        if (!pinState) {
            return;
        }

        setPinNumber(pinState.number);
        setPinState(pinState.state);
    }, [pin, pins]);


    if (type === PinOptionsType.GPIO) {
        return <GPIOSlide onToggle={(state) => setGPIOState({ number: pinNumber, state })} active={pinState} />
    }
    //if (pin.type === PinOptionsType.GROUND) {}
    //if (pin.type === PinOptionsType.POWER) {}
    //if (pin.type === PinOptionsType.ID_SC) {}
    //if (pin.type === PinOptionsType.ID_SD) {}
    

    return <div></div>
}

export default BoardPinActions