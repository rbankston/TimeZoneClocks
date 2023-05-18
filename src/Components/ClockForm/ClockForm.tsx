import React, { ChangeEvent, useState } from "react";
import { Clock } from "../../Models/Clocks";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

interface ClockFormProps {
  clock: Clock;
  updateClock: (newClock: Clock) => void;
}



function ClockForm({ clock, updateClock }: ClockFormProps) {
  // const handleTimeZoneChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   updateClock({ ...clock, timeZone: value });
  // };
  
  const [isDigital, setIsDigital] = useState(false);

  const [tz, setTz] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

const checkedChange = (e: any) => {
    setIsDigital(e.target.checked);
    let newClock: Clock = {
      ...clock, isDigital: isDigital
    };
    updateClock(newClock);

}

  return (
    <>
      <td>
        <label>
          Time Zone:
          <TimezoneSelect
            value={tz}
            onChange={setTz}
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
            onChange={e => checkedChange(e.target.checked)}
          />
        </label>
      </td>
    </>
  );
}

export default ClockForm;
