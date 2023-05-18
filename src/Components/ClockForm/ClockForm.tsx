import React, { ChangeEvent, useState } from "react";
import { Clock } from "../../Models/Clocks";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

interface ClockFormProps {
  clock: Clock;
  updateSingleClock: (newClock: Clock) => void;
}

function ClockForm({ clock, updateSingleClock }: ClockFormProps) {
  const handleTimeZoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let newClock = { timeZone: tz, isDigital: isDigital };
    updateSingleClock(newClock);
  };

  const [isDigital, setIsDigital] = useState(false);

  const [tz, setTz] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  function handleTzChange(event: any) {
    setTz(event.value);
    let newClock = { timeZone: tz, isDigital: isDigital };
    updateSingleClock(newClock);
  }

  function handleDigitalChange(event: any) {
    setIsDigital(event.target.checked);
    let newClock = { timeZone: tz, isDigital: isDigital };
    updateSingleClock(newClock);
  }

  return (
    <>
      <td>
        <label>
          Time Zone:
          <TimezoneSelect
            value={tz}
            onChange={handleTzChange}
            timezones={{
              ...allTimezones,
            }}
          />
        </label>
        <label>
          Is Digital:
          <input
            type="checkbox"
            checked={isDigital}
            onChange={handleDigitalChange}
          />
        </label>
      </td>
    </>
  );
}

export default ClockForm;
