import React from "react";
import { responses } from './AccidentCodes/CodeResponses';

// Component Imports
import RearEndForm from './RearEndForm';
import LaneChangeForm from './LaneChangeForm';
import BackingForm from './BackingForm';

// Function Imports
import rearEndFault from './FaultFunctions/rearEndFault';
import laneChangeFault from './FaultFunctions/laneChangeFault';
import backingFault from './FaultFunctions/backingFault';

export default function AccidentForm() {

    // Form State
    const [accidentType, setAccidentType] = React.useState("");
    // Shared State
    const [ivAction, setIvAction] = React.useState("");
    const [sawOtherCar, setSawOtherCar] = React.useState("");
    const [evasiveAction, setEvasiveAction] = React.useState("");
    const [cvAction, setCvAction] = React.useState("");
    const [ivPoi, setIvPoi] = React.useState("");
    const [cvPoi, setCvPoi] = React.useState("");
    const [accidentCode, setAccidentCode] = React.useState(0)
    // Rear End Accident State
    const [numberOfCars, setNumberOfCars] = React.useState("");
    const [carPosition, setCarPosition] = React.useState("");
    const [pushed, setPushed] = React.useState("");
    // Lane Change Accident State all covered by Shared State
    // Backing Acciding State
    const [ivStoppedOrMoving, setIvStoppedOrMoving] = React.useState("");
    const [cvStoppedOrMoving, setCvStoppedOrMoving] = React.useState("");
    const [ivDistanceOut, setIvDistanceOut] = React.useState("");
    const [cvDistanceOut, setCvDistanceOut] = React.useState("");

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

    const backingFields = (
        <BackingForm 
            ivAction={ivAction}
            setIvAction={setIvAction}
            sawOtherCar={sawOtherCar}
            setSawOtherCar={setSawOtherCar}
            evasiveAction={evasiveAction}
            setEvasiveAction={setEvasiveAction}
            cvAction={cvAction}
            setCvAction={setCvAction}
            ivStoppedOrMoving={ivStoppedOrMoving}
            setIvStoppedOrMoving={setIvStoppedOrMoving}
            cvStoppedOrMoving={cvStoppedOrMoving}
            setCvStoppedOrMoving={setCvStoppedOrMoving}
            ivDistanceOut={ivDistanceOut}
            setIvDistanceOut={setIvDistanceOut}
            cvDistanceOut={cvDistanceOut}
            setCvDistanceOut={setCvDistanceOut}
            ivPoi={ivPoi}
            setIvPoi={setIvPoi}
            cvPoi={cvPoi}
            setCvPoi={setCvPoi}
        />
    )

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault();
        if (accidentType === "rearEnd") {
            setAccidentCode(rearEndFault(
                numberOfCars,
                carPosition,
                pushed))
        } else if (accidentType === "laneChange") {
            setAccidentCode(laneChangeFault(
                ivAction, 
                cvAction, 
                ivPoi, 
                cvPoi, 
                sawOtherCar, 
                evasiveAction))
        } else if (accidentType === "backing") {
            setAccidentCode(backingFault(
                ivStoppedOrMoving,
                cvStoppedOrMoving,
                sawOtherCar,
                ivAction,
                cvAction,
                ivDistanceOut,
                cvDistanceOut,
                ivPoi,
                cvPoi,
                evasiveAction
            ))
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
            {accidentType === "backing" ? backingFields : ''}
            <br />
            <div>
                <button>So who's fault is this?</button>
            </div>
            <br />
            <h3>{accidentCode ? responses[accidentCode][0] : ''}</h3>
            <h3>{accidentCode ? responses[accidentCode][1] : ''}</h3>
        </form>
    )
}