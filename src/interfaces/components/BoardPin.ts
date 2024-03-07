import { UIPinOptions } from "interfaces/pin";

export interface BoardPin extends UIPinOptions {
  number: number;
  isLeft?: boolean;
}

export interface BoardPinProps {
  pin: BoardPin;
}
