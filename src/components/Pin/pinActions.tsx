import { setGPIOState } from "../../logic/pinActions.ts";
import GPIOSlide from "../GPIOSlide";
import { PinOptionsType } from "interfaces/pin.ts";
import { BoardPinProps } from "interfaces/components/Pin.ts";

function PinActions({ pin }: BoardPinProps) {
    const { number, type } = pin
    if (type === PinOptionsType.GPIO) {
        return <GPIOSlide onToggle={(state) => setGPIOState({ number, state })} />
    }
    //if (pin.type === PinOptionsType.GROUND) {}
    //if (pin.type === PinOptionsType.POWER) {}
    //if (pin.type === PinOptionsType.ID_SC) {}
    //if (pin.type === PinOptionsType.ID_SD) {}
    

    return <div></div>
}

export default PinActions