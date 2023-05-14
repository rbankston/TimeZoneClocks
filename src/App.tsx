import React, { useState } from 'react';
import './App.css';
import { Clock } from './Models/Clocks';
import './Clocks.css'
import { Header } from './Header';
import ClockForm from './Components/ClockForm/ClockForm';
import { ClockDisplay } from './ClockDisplay';
import AnalogClock from './AnalogClock';
import DigitalClock from './DigitalClock';


function App() {

  const [clocks, setClocks] = useState<Clock[]>([]);

  return (
    <div className="App">
    <Header></Header>
      <div className='headings'>
        <h2>Settings</h2>
        <h2>Clocks</h2>
     </div>
     <button className='addClock'>Add Clock</button>
     {/* <ClockDisplay></ClockDisplay> */}
     <div className='analog'><AnalogClock></AnalogClock></div>
     <div className='digital'><DigitalClock></DigitalClock></div>
    </div>
  );
}

export default App;
