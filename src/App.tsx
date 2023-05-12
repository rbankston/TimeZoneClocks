import React, { useState } from 'react';
import './App.css';
import { Clock } from './Models/Clocks';
import './Clocks.css'
import { Header } from './Header';


function App() {

  const [clocks, setClocks] = useState<Clock[]>([


  ]);

  return (
    <div className="App">
      
    <Header></Header>
    
    </div>
  );
}

export default App;
