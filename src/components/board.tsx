import { pinoutMap } from 'logic/pinout.ts'
import BoardPin from './BoardPin/index.tsx'
import './board.css'

import { event } from 'ws/index';
import { useEffect } from 'preact/hooks';
const { VITE_WS_ACTION_PINWRITE } = import.meta.env;

function Board() {
    const rightPinout = pinoutMap.filter((_, index) => index % 2)
    const leftPinout = pinoutMap.filter((_, index) => !(index % 2))

    useEffect(() => {
        event.on(VITE_WS_ACTION_PINWRITE, (pinState) => {
            console.log('got write on pin', pinState)
        });
    }, []);
    
    return <div style={{
        display: 'flex'
    }}>
        <div>
            {leftPinout.map((pin, index) => <div key={'l' + index}>
                <BoardPin pin={{ number: (index) * 2 + 1, isLeft: true, ...pin }} />
            </div>)}
        </div>
        <div>
            {rightPinout.map((pin, index) => <div key={'r' + index}>
                <BoardPin pin={{ number: (index + 1) * 2, ...pin }} />
            </div>)}
        </div>
    </div>
}

export default Board