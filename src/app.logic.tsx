import ws from "ws/index.ts";

import { useBoardPins, pinoutMap } from "logic/board";
import { useWSMessages } from "logic/ws";
import { readPin } from "ws/wsActions";
import { event } from "ws/index";
import { useEffect } from "preact/hooks";
const { VITE_WS_ACTION_PINWRITE, VITE_WS_ACTION_PINREAD } = import.meta.env;

const App = ({ children }) => {
  const pinsStore = useBoardPins();
  const chatStore = useWSMessages();

  useEffect(() => {
    if (ws.readyState !== ws.OPEN) {
      return;
    }

    pinoutMap.forEach((pin, number) => {
      readPin({ number });
    });
    chatStore.save("Connected to Board");

    // must make sure this event is singleton
    event.on(VITE_WS_ACTION_PINREAD, (pinState) => {
      pinsStore.setPin(pinState);
    });
  }, [ws.readyState]);

  return children;
};

export default App;
