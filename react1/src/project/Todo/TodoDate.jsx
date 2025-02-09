import { useState, useEffect } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState('');
    useEffect(() => {

        // update the date and time
        const updateDateTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(formattedDate + ' - ' + formattedTime);
        };

        // update the date and time every second
        updateDateTime();

        // set the date and time
        const interval =setInterval(updateDateTime, 1000);

        // clear the interval when the component unmounts
        return () => clearInterval(interval);

    }, []);
    
    return <h2 className='date-time'>{dateTime}</h2>
}
