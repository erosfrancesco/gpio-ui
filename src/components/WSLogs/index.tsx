import { useWSMessages } from "logic/ws";
import "./index.css";
import { event } from "ws/index";
import { useEffect, useState } from "preact/hooks";
const { VITE_WS_ACTION_SENDMESSAGE } = import.meta.env;

function WSLogs() {
  const [isCompressed, setIsCompressed] = useState(false);
  const wsMessages = useWSMessages();
  useEffect(() => {
    event.on(VITE_WS_ACTION_SENDMESSAGE, (message) => {
      wsMessages.save(message);
    });
  }, []);

  const toggleCompressed = () => {
    setIsCompressed(!isCompressed);
  };

  return (
    <div
      className={
        "wslog_wrapper" + (isCompressed ? " wslog_wrapper_compressed" : "")
      }
      onClick={toggleCompressed}
    >
      {wsMessages.pool.map((message) => (
        <p className="wslog_row">{message}</p>
      ))}
    </div>
  );
}

export default WSLogs;
