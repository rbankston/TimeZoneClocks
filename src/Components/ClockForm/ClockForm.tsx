import React, { ChangeEvent, useState } from "react";
import { Clock } from "../../Models/Clocks";
import TimezoneSelect, { allTimezones } from "react-timezone-select";
import type { ITimezone } from "react-timezone-select";

interface ClockFormProps {
  clock: Clock;
  updateClock: (updatedClock: Clock) => void;
}

function ClockForm({ clock, updateClock }: ClockFormProps) {
  const handleTimeZoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateClock({ ...clock, timeZone: value });
  };

  const [tz, setTz] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const handleIsDigitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    updateClock({ ...clock, isDigital: checked });
  };

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
            checked={clock.isDigital}
            onChange={handleIsDigitalChange}
          />
        </label>
      </td>
    </>
  );
}

export default ClockForm;
