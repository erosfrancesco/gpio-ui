import { UIGPIOActions } from "interfaces/pinActions";

export interface GPIOSlideProps {
  onToggle?: (value: boolean) => void;
  active?: boolean;
}

export interface GPIOSlideToggleOptions extends UIGPIOActions {
  state: boolean;
}
