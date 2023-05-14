import { ClockDisplay } from "./ClockDisplay";
import { Clock } from "./Models/Clocks";

export function Clocks (props: { clocks: Clock[]}){

    return (
        <div>
            {
            props.clocks.map((clock) => (<ClockDisplay clock= {clock} ></ClockDisplay>))
}
            
        </div>
    )
}