import { useState, useEffect } from "react";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

function DigitalClock() {
    // const [date, setDate] = useState(new Date());

    const [tz, setTz] = useState<ITimezone>(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );

    const displayOptions = {
        dateStyle: "full",
        timeStyle: "medium",
        hour12: false,
        timeZone: typeof tz === "string" ? tz : tz.value
      };
    
      const [datetime, setDatetime] = useState(
        new Intl.DateTimeFormat("en-US").format(new Date())
      );

    function refreshClock() {
        setDatetime(Intl.DateTimeFormat("en-US").format(new Date()));
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            {}
        </div>
    );
}

export default DigitalClock;