import WSLogs from "./components/WSLogs";
import Board from "./components/board";

import AppLogic from "./app.logic";

export function App() {
  return (
    <AppLogic>
      <WSLogs />
      <Board />
    </AppLogic>
  );
}
