export enum PinOptionsType {
    POWER,
    GROUND,
    GPIO,
    ID_SC,
    ID_SD
}

export interface PinOptions {
    type: PinOptionsType;
    label: string;
}

export const pinoutMap: PinOptions[] = [
    {
        type: PinOptionsType.POWER,
        label: '3.3V'
    }, {
        type: PinOptionsType.POWER,
        label: '5V'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO 2 (SDA)'
    }, {
        type: PinOptionsType.POWER,
        label: '5V'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO 3 (SCL)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO4 (GPCLK0)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO14 (TXD)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO15 (RXD)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO17'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO18 (PCM_C)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO27 (PCM_D)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO22'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO23'
    }, {
        type: PinOptionsType.POWER,
        label: '3.3V'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO24'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO10 (MOSI)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO9 (MISO)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO25'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO11 (SCKL)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO8 (CE0)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO7 (CE1)'
    }, {
        type: PinOptionsType.ID_SD,
        label: 'ID_SD'
    }, {
        type: PinOptionsType.ID_SC,
        label: 'ID_SC'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO5'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO6'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO12'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO13'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO19 (MISO)'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO16'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO26'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO20 (MOSI)'
    }, {
        type: PinOptionsType.GROUND,
        label: 'Ground'
    }, {
        type: PinOptionsType.GPIO,
        label: 'GPIO21 (SCKL)'
    }
]

export default pinoutMap