import React, { useState } from "react";
import "./App.css";
import { Clock } from "./Models/Clocks";
import "./Clocks.css";
import { Header } from "./Header";
import Settings from "./Components/Settings/Settings";
import { ClockDisplay } from "./ClockDisplay";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { Clocks } from "./Clocks";
import { Button } from "./Components/Button/Button";

function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);

  const addClock = () => {
    setClocks((prevClocks) => [
      ...prevClocks,
      { timeZone: "", isDigital: false },
    ]);
  };

  return (
    <div className="App">
      <Header></Header>
      <Button onClick={addClock}>Add Clock</Button>
      <table className="headings">
        <tr>
          <th>Settings</th>
          <th>Clocks</th>
        </tr>
      </table>
      <table>
        <div className="ClockHolder">
          <Settings
            clocks={clocks}
            updateClock={(updatedClock) => {
              setClocks((prevClocks) => {
                const newClocks = [...prevClocks];
                return newClocks;
              });
            }}
          ></Settings>
          <Clocks clocks={clocks} />
        </div>
      </table>
    </div>
  );
}

export default App;
