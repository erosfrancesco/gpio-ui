import { useState } from 'preact/hooks';
import { PinOptions, PinOptionsType } from '../../logic/pinout'
import './pinNumber.css'

const typeClassNames :Object = {};
typeClassNames[PinOptionsType.POWER] = 'pin_number_power'
typeClassNames[PinOptionsType.GROUND] = 'pin_number_ground'
typeClassNames[PinOptionsType.GPIO] = 'pin_number_gpio'
typeClassNames[PinOptionsType.ID_SC] = 'pin_number_id'
typeClassNames[PinOptionsType.ID_SD] = 'pin_number_id'

export function PinNumber({ pin }: BoardPinProps) {
    const { type, number } = pin;
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => { setSelected(!selected); }

    return <div className='pin_number_wrapper'>
        <div className={'pin_number ' + typeClassNames[type]} onClick={toggleSelected}>
            <div className={'pin_number_selected' + (selected ? '' : ' dontDisplay')}>
                <span className='removeSelect'>{(number < 10 ? '0' : '') + '' + number}</span>
            </div>
        </div>
    </div>
}



export default PinNumber
