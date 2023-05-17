import { ClockDisplay } from "./ClockDisplay";
import { Clock } from "./Models/Clocks";

interface Props {
  clocks: Clock[];
}

export function Clocks({ clocks }: Props) {
  return (
    <div>
      {clocks.map((clock) => (
        <div>
          <ClockDisplay clocks={clock} />
        </div>
      ))}
    </div>
  );
}
