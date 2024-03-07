export enum PinOptionsType {
    POWER,
    GROUND,
    GPIO,
    ID_SC,
    ID_SD
}

export interface UIPinOptions {
    type: PinOptionsType;
    label: string;
}