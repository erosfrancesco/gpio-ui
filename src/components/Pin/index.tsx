import { PinOptions, PinOptionsType } from '../../logic/pinout'
import './index.css';

import PinActions from './pinActions';
import PinNumber from './pinNumber';

const typeClassNames :any = {};
typeClassNames[PinOptionsType.POWER] = 'pin_number_power'
typeClassNames[PinOptionsType.GROUND] = 'pin_number_ground'
typeClassNames[PinOptionsType.GPIO] = 'pin_number_gpio'
typeClassNames[PinOptionsType.ID_SC] = 'pin_number_id'
typeClassNames[PinOptionsType.ID_SD] = 'pin_number_id'

interface BoardPin extends PinOptions {
    number: number
    isLeft?: boolean
}

export interface BoardPinProps { pin: BoardPin }

function Pin({ pin }: BoardPinProps) {
    const { label, isLeft } = pin;

    return <div className={'pin_row' + (isLeft ? ' left_column' : '')}>
        <PinNumber pin={pin} />
        <div style={{
            marginRight: '0.25rem',
            marginLeft: '0.25rem',
        }}>
            <PinActions pin={pin} />
        </div>
        <div className={'pin_label' + (isLeft ? ' left_column' : '')}>
            <span>{label}</span>
        </div>
    </div>
    
}

export default Pin
