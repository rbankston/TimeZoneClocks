import React from "react";
import { Clock } from "../../Models/Clocks";
import ClockForm from "../ClockForm/ClockForm";
import { Button } from "../Button/Button";
import type { ITimezone } from "react-timezone-select";

interface SettingsProps {
  clocks: Clock[];
  updateClock: (index: number, updatedClock: Clock) => void;
}

export function Settings({ clocks, updateClock }: SettingsProps) {
  const handleDeleteClick = (index: number) => {
    // Call the updateClock function with an empty clock object to delete the clock at the specified index
    updateClock(index, { timeZone: "", isDigital: false });
  };

  return (
    <div>
      {clocks.map((clock, index) => (
        <div className="singleRow">
          <tr key={index}>
            <td>
              <ClockForm
                clock={clock}
                updateClock={(updatedClock) => updateClock(index, updatedClock)}
              />
              <Button onClick={() => console.log()}>Delete</Button>
            </td>
          </tr>
        </div>
      ))}
    </div>
  );
}

export default Settings;
