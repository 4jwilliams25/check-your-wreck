import React from "react";
import { 
    makeStyles,
    InputLabel, 
    MenuItem, 
    Button, 
    FormControl, 
    Select, 
    Typography 
} from '@material-ui/core';
import { responses } from './AccidentCodes/CodeResponses';

// Component Imports
import RearEndForm from './RearEndForm';
import LaneChangeForm from './LaneChangeForm';
import BackingForm from './BackingForm';

// Function Imports
import rearEndFault from './FaultFunctions/rearEndFault';
import laneChangeFault from './FaultFunctions/laneChangeFault';
import backingFault from './FaultFunctions/backingFault';


    // Form Styling
    const useStyles = makeStyles(theme => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }))

export default function AccidentForm() {
    const classes = useStyles();
    const inputLabel = React.useRef(null);

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
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel>What kind of accident were you in?</InputLabel>
                <Select 
                    required
                    value={accidentType} 
                    onChange={e => setAccidentType(e.target.value)}
                >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="rearEnd">A rear end accident.</MenuItem>
                    <MenuItem value="laneChange">A lane change accident.</MenuItem>
                    <MenuItem value="backing">A backing accident.</MenuItem>
                </Select>
            </FormControl>
                <br />
                {accidentType === "rearEnd" ? rearEndFields : ''}
                {accidentType === "laneChange" ? laneChangeFields : ''}
                {accidentType === "backing" ? backingFields : ''}
                <br />
                <div>
                    <Button 
                        onClick={handleSubmit} 
                        size="small"
                        variant="outlined" 
                        color="primary"
                    >
                        So who's fault is this?
                    </Button>
                </div>
                <br />
                <h3>{accidentCode ? responses[accidentCode][0] : ''}</h3>
                <h3>{accidentCode ? responses[accidentCode][1] : ''}</h3>
            
        </div>
    )
}