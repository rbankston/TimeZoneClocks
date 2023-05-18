import './AnalogClock.css';
import { useEffect, useState } from "react";

function AnalogClock() {

  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const hour = date.getHours() * 30 + 180;
  const minute = date.getMinutes() * 6 + 180; 
  const second = date.getSeconds() * 6 + 180; 

return (
    <>
      <div className="play-details">
        <div className="play-details-body">
          <h1 className="clock-play-heading">Analog Time</h1>
          <div className="analong-clock-container">
            <div className="clock">
              <div
                className="hour-hand"
                style={{
                  transform: 'rotate(' + hour + 'deg)'
                }}
              />
              <div
                className="minute-hand"
                style={{
                  transform: 'rotate(' + minute + 'deg)'
                }}
              />
              <div
                className="second-hand"
                style={{
                  transform: 'rotate(' + second + 'deg)'
                }}
              />
              <div className="brand" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalogClock;