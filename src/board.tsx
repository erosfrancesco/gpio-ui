import pinoutMap from './logic/pinout'
import './board.css'
import Pin from './pin/pin'

export function Board() {
    const rightPinout = pinoutMap.filter((_, index) => index % 2)
    const leftPinout = pinoutMap.filter((_, index) => !(index % 2))
    
    return <div style={{
        display: 'flex'
    }}>
        <div>
            {leftPinout.map((pin, index) => <div key={'l' + index}>
                <Pin pin={{ number: (index) * 2 + 1, isLeft: true, ...pin }} />
            </div>)}
        </div>
        <div>
            {rightPinout.map((pin, index) => <div key={'r' + index}>
                <Pin pin={{ number: (index + 1) * 2, ...pin }} />
            </div>)}
        </div>
    </div>
}

export default Board