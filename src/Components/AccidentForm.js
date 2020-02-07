import React from "react";

// Component Imports
import RearEndForm from './RearEndForm';

export default function AccidentForm() {

    // Form State
    const [fault, setFault] = React.useState("");
    const [accidentType, setAccidentType] = React.useState("");
    const [numberOfCars, setNumberOfCars] = React.useState("");
    const [carPosition, setCarPosition] = React.useState("");
    const [pushed, setPushed] = React.useState("");

    // Conditional Rendering Elements
    const rearEndFields = (
        <RearEndForm
            numberOfCars={numberOfCars}
            setNumberOfCars={setNumberOfCars}
            carPosition={carPosition}
            setCarPosition={setCarPosition}
            pushed={pushed}
            setPushed={setPushed}
        />
    )

    // Fault determination functions
    const rearEndFault = () => {
        if (numberOfCars === "2" && carPosition === "back") {
            return "You're at fault!"
        } else if (numberOfCars === ">2" && carPosition === "back") {
            return "You're at fault!"
        } else if (numberOfCars === ">2" && carPosition === "middle" && pushed === "rearEnded") {
            return "You're at fault, but only for damage you caused to the car in front of you!"
        } else {
            return "You're not at fault!"
        }
    }

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault();
        if (accidentType === "rearEnd") {
            setFault(rearEndFault())
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Accident Form</h4>
            <div>What kind of accident were you in?</div>
            <select required onChange={e => setAccidentType(e.target.value)}>
                <option value=""></option>
                <option value="rearEnd">A rear end accident.</option>
                <option value="laneChange">A lane change accident.</option>
                <option value="backing">A backing accident.</option>
            </select>
            <br />
            {accidentType === "rearEnd" ? rearEndFields : ''}
            <br />
            <div>
                <button>So who's fault is this?</button>
            </div>
            <br />
            <h1>{fault}</h1>
        </form>
    )
}