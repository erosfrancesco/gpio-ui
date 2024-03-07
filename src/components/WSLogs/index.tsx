import { useWSMessages } from 'logic/ws';
import './index.css'
import { event } from 'ws/wsHandlers';
import { useEffect } from 'preact/hooks';
const { VITE_WS_ACTION_SENDMESSAGE } = import.meta.env;


function WSLogs() {
    const wsMessages = useWSMessages();
    useEffect(() => {
        event.on(VITE_WS_ACTION_SENDMESSAGE, (message) => {
            wsMessages.save(message)
        });
    }, []);
    

    return <div className='wslog_wrapper'>
        {wsMessages.pool.map((message) => <p className='wslog_row'>{message}</p>)}
    </div>
}

export default WSLogs;