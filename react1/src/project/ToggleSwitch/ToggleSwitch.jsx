import { useState } from 'react';
import './ToggleSwitch.css';

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(true);
    const handleClick = () => {
        setIsOn(!isOn);
    };

    const checkIsOn = isOn ? 'on' : 'off';
    const toggleColor = {backgroundColor: isOn ? 'green' : 'red'};

    return (
        <div 
        className='toggle-switch' 
        style={toggleColor} 
        onClick={handleClick}
        >
            <div className={`switch ${checkIsOn}`}> 
                <span className='switch-state'>{checkIsOn}</span>
            </div>
        </div>
    );
};
