import "./index.css";

import PinActions from "./pinActions";
import PinNumber from "./pinNumber";
import { BoardPinProps } from "interfaces/components/BoardPin";

function Pin({ pin }: BoardPinProps) {
  const { label, isLeft } = pin;

  return (
    <div className={"pin_row" + (isLeft ? " left_column" : "")}>
      <PinNumber pin={pin} />
      <div
        style={{
          marginRight: "0.25rem",
          marginLeft: "0.25rem",
        }}
      >
        <PinActions pin={pin} />
      </div>
      <div className={"pin_label" + (isLeft ? " left_column" : "")}>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default Pin;
