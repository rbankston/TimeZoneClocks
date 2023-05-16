import { ClockDisplay } from "./ClockDisplay";
import { Clock } from "./Models/Clocks";

export function Clocks (props: { clocks: Clock[]}){

    return (
        <div>
            {
            props.clocks.map((clock) => (<ClockDisplay clocks={clock} onUpdate={function (clocks: Clock): void {
                throw new Error("Function not implemented.");
            } } onDelete={function (clocks: Clock): void {
                throw new Error("Function not implemented.");
            } } ></ClockDisplay>))
}  
        </div>
    )
}