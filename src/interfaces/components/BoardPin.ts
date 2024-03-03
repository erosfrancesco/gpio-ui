import { PinOptions } from "interfaces/pin"

export interface BoardPin extends PinOptions {
    number: number
    isLeft?: boolean
}

export interface BoardPinProps { pin: BoardPin }
