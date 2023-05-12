import React from "react";
import ClockForm from "../ClockForm/ClockForm";
import { Button } from "../Button/Button";

interface Clock {
  timeZone: string;
  isDigital: boolean;
}

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
        <div key={index}>
          <ClockForm
            clock={clock}
            updateClock={(updatedClock) => updateClock(index, updatedClock)}
          />
          <Button onClick={() => console.log()}>Delete</Button>
        </div>
      ))}
    </div>
  );
}

export default Settings;
