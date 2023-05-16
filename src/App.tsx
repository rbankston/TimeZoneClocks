import React, { useState } from 'react';
import './App.css';
import { Clock } from './Models/Clocks';
import './Clocks.css'
import { Header } from './Header';
import Settings from './Components/Settings/Settings';
import { ClockDisplay } from './ClockDisplay';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';
import { Clocks } from './Clocks';
import { Button } from './Components/Button/Button';


function App() {

  const [clocks, setClocks] = useState<Clock[]>([]);

  const addClock = () => {
    setClocks((prevClocks) => [
      ...prevClocks,
      { timeZone: "", isDigital: true },
    ]);
  };

  
  return (
    <div className="App">
    <Header></Header>
      <div className='headings'>
        <h2>Settings</h2>
        <h2>Clocks</h2>
     </div>
     <Button onClick={addClock}>Add Clock</Button>
     {/* <ClockDisplay clocks={[]} onUpdate={function (clocks: Clock): void {
        throw new Error('Function not implemented.');
      } } onDelete={function (clocks: Clock): void {
        throw new Error('Function not implemented.');
      } }></ClockDisplay> */}
     <div className='analog'><AnalogClock></AnalogClock></div>
     <div className='digital'><DigitalClock></DigitalClock></div>
     <div>   <Settings clocks={clocks} updateClock={(index, updatedClock) => {
        setClocks(prevClocks => {
          const newClocks = [...prevClocks];
          newClocks[index] = updatedClock;
          return newClocks;
        });
      }}></Settings></div>
    </div>
  )
}

export default App;
