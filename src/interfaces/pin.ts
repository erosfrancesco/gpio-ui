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