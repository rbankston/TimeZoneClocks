import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { Clock } from "./Models/Clocks";

interface Props {
  clocks: Clock;
  //   onUpdate: () => void;
}

export function ClockDisplay({ clocks }: Props) {
  return (
    <>
      <div className="singleRow">
        <td className={clocks.isDigital ? "digital" : "analog"}>
          {clocks.isDigital ? <DigitalClock /> : <AnalogClock />}
        </td>
      </div>
    </>
  );
}
