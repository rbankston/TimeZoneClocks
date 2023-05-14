import { Clock } from "./Models/Clocks";

export function ClockDisplay(props: { clocks: Clock, onUpdate: (clocks: Clock) => void, onDelete: (clocks: Clock) => void }) {

    return (
        <div>
            <div className={props.clocks.isDigital ? "digital" : "analog"}>

            </div>
        </div>

    )
}