interface BoardPinState {
  number: number; // PIN ID
  value?: boolean; // HIGH, LOW
  state?: boolean; // READ, WRITE
  // TODO: - ALL READ/WRITE OPTIONS PROVIDED BY RPIO
}

export interface BoardPinsStoreState {
  pins: BoardPinState[];
}

export interface BoardPinsStore extends BoardPinsStoreState {
  setPin: (newPinState: BoardPinState) => void;
  reset: () => void;
}
