export interface UIGPIOActions {
    number: number;
}

export interface GPIOAction {
    number: number;
}

export interface setGPIOStateActionOptions extends GPIOAction {
    // options for setting GPIO state
    state: boolean
}
export interface getGPIOStateActionOptions extends GPIOAction {
    // options for getting GPIO state
}