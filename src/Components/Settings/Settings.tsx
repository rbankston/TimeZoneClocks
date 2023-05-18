import { useState } from "react";
import { Clock } from "../../Models/Clocks";
import ClockForm from "../ClockForm/ClockForm";
import { Button } from "../Button/Button";
import type { ITimezone } from "react-timezone-select";

interface SettingsProps {
  clocks: Clock[];
  deleteClocks: (index: number) => void;
  updateClocks: (clocks: Clock[]) => void;
}

export function Settings({
  clocks,
  deleteClocks,
  updateClocks,
}: SettingsProps) {
  const [newClock, updateNewClock] = useState<Clock[]>(clocks);

  const provideIndex = (index: number) => {
    deleteClocks(index);
  };
  const deleteClockByIndex = (index: number) => {
    updateNewClock([...clocks.slice(0, index), ...clocks.slice(index + 1)]);
    updateClocks(newClock);
  };

  return (
    <div>
      {clocks.map((clock, index) => (
        <div className="singleRow">
          <tr key={index}>
            <td>
              <ClockForm
                clock={clock}
                updateSingleClock={(updatedClock) => console.log(updatedClock)}
              />
              <button onClick={() => provideIndex(index)}>Delete</button>
            </td>
          </tr>
        </div>
      ))}
    </div>
  );
}

export default Settings;
