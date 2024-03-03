import { useState } from "preact/hooks"
import './GPIOSlide.css'
import { GPIOSlideProps } from "interfaces/components/GPIOSlide";

function GPIOSlide({ onToggle = () => {}, active: activeProps }: GPIOSlideProps) {
    const [active, setActive] = useState(activeProps);

    const onClick = () => {
        const updatedValue = !active;
        setActive(updatedValue)
        onToggle(updatedValue)
    }

    return <button onClick={onClick} className='slide'>
        <div className={'slide_content ' + (active ? 'slide_active' : 'slide_inactive')}>
            <div className='slide_content_clip' />
            <span className='slide_content_label'>{active ? 'ON' : 'OFF'}</span>
        </div>
    </button>
}

export default GPIOSlide