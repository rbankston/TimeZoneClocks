import { useState, useEffect } from "react";

function DigitalClock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    );
}

export default DigitalClock;