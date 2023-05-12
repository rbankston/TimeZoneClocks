import React, { ChangeEvent } from "react";
import { Clock } from "../../Models/Clocks";

interface ClockFormProps {
  clock: Clock;
  updateClock: (updatedClock: Clock) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ clock, updateClock }) => {
  const handleTimeZoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateClock({ ...clock, timeZone: value });
  };

  const handleIsDigitalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    updateClock({ ...clock, isDigital: checked });
  };

  return (
    <div>
      <label>
        Time Zone:
        <input
          type="text"
          value={clock.timeZone}
          onChange={handleTimeZoneChange}
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
    </div>
  );
};

export default ClockForm;
