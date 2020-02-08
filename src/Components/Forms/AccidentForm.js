import React from "react";

// Component Imports
import RearEndForm from './RearEndForm';
import LaneChangeForm from './LaneChangeForm';

export default function AccidentForm() {

    // Form State
    const [fault, setFault] = React.useState("");
    const [accidentType, setAccidentType] = React.useState("");
    // Shared State
    const [ivAction, setIvAction] = React.useState("");
    const [sawOtherCar, setSawOtherCar] = React.useState("");
    const [evasiveAction, setEvasiveAction] = React.useState("");
    const [cvAction, setCvAction] = React.useState("");
    const [ivPoi, setIvPoi] = React.useState("");
    const [cvPoi, setCvPoi] = React.useState("")
    // Rear End Accident State
    const [numberOfCars, setNumberOfCars] = React.useState("");
    const [carPosition, setCarPosition] = React.useState("");
    const [pushed, setPushed] = React.useState("");
    // Lane Change Accident State all covered by Shared State
    

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

    const laneChangeFields = (
        <LaneChangeForm 
            ivAction={ivAction}
            setIvAction={setIvAction}
            sawOtherCar={sawOtherCar}
            setSawOtherCar={setSawOtherCar}
            evasiveAction={evasiveAction}
            setEvasiveAction={setEvasiveAction}
            cvAction={cvAction}
            setCvAction={setCvAction}
            ivPoi={ivPoi}
            setIvPoi={setIvPoi}
            cvPoi={cvPoi}
            setCvPoi={setCvPoi}
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

    const laneChangeFault = () => {
        if (
            ivAction === "straight" &&
            cvAction === "changing" && (
            cvPoi === "leftRearCorner" ||
            cvPoi === "rightRearCorner"
        )) {
            return "You may have a little fault"
        } else if (
            ivAction === "changing" &&
            cvAction === "straight" && (
            ivPoi === "leftRearCorner" ||
            ivPoi === "rightRearCorner"
        )) {
          return "You're at fault, or at least mostly at fault!"  
        } else if (
            ivAction === "changing" &&
            cvAction === "straight" && (
            cvPoi === "leftSide" ||
            cvPoi === "leftQuarter" ||
            cvPoi === "rightSide" ||
            cvPoi === "rightQuarter"
        )) {
          return "You are super at fault! Like really really at fault! Like what are you even doing on the road?!"  
        } else if (
            ivAction === "changing" &&
            cvAction === "straight"
           ) {
          return "You're at fault!"  
        } else if (
            ivAction === "changing" &&
            cvAction === "changing"
           ) {
          return "You're both at fault!"  
        } else if (
            sawOtherCar === "yes" &&
            evasiveAction === "no"
        ) {
            return "You may have a little fault"
        } else {
            return "You're not at fault!"
        }
    }

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault();
        if (accidentType === "rearEnd") {
            setFault(rearEndFault())
        } else if (accidentType === "laneChange") {
            setFault(laneChangeFault())
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
            {accidentType === "laneChange" ? laneChangeFields : ''}
            <br />
            <div>
                <button>So who's fault is this?</button>
            </div>
            <br />
            <h1>{fault}</h1>
        </form>
    )
}