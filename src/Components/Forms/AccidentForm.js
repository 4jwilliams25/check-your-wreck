// TODO: disable the submit button until all the fields are filled

import React from "react";
import { useHistory } from 'react-router-dom';

import { 
    makeStyles,
    InputLabel, 
    MenuItem, 
    Button, 
    FormControl, 
    Select
} from '@material-ui/core';

// Component Imports
import RearEndForm from './RearEndForm';
import LaneChangeForm from './LaneChangeForm';
import BackingForm from './BackingForm';

// Function Imports
import rearEndFault from './FaultFunctions/rearEndFault';
import laneChangeFault from './FaultFunctions/laneChangeFault';
import backingFault from './FaultFunctions/backingFault';

// Post Request Imports
import { useDispatch } from 'react-redux';
import { addRearEnd } from '../../Store/rearEnders/rearEndActions';
import { addLaneChange } from '../../Store/laneChanges/laneChangeActions';
import { addBacking } from '../../Store/backing/backingActions';

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

export default function AccidentForm(props) {
    const classes = useStyles();
    const inputLabel = React.useRef(null);

    // Form State
    const [accidentType, setAccidentType] = React.useState("");
    const [disable, setDisable] = React.useState(true)
    // Shared State
    const [ivAction, setIvAction] = React.useState("");
    const [sawOtherCar, setSawOtherCar] = React.useState("");
    const [evasiveAction, setEvasiveAction] = React.useState("");
    const [cvAction, setCvAction] = React.useState("");
    const [ivPoi, setIvPoi] = React.useState("");
    const [cvPoi, setCvPoi] = React.useState("");
    // const [accidentCode, setAccidentCode] = React.useState(0)
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

    let history = useHistory();
    const dispatch = useDispatch();

    // Submit Handler
    const handleSubmit = e => {
        e.preventDefault();

        let date = new Date();
        let currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

        history.push('/report')

        if (accidentType === "rearEnd") {

            const newLoss = {
                accident_type: "rearEnd",
                number_of_cars: numberOfCars,
                car_position: carPosition,
                pushed: pushed,
                date_created: currentDate,
                date_updated: currentDate
            }

            props.setAccidentCode(rearEndFault(
                numberOfCars,
                carPosition,
                pushed));

            dispatch(addRearEnd(newLoss));

        } else if (accidentType === "laneChange") {

            const newLoss = {
                accident_type: "laneChange",
                iv_action: ivAction,
                cv_action: cvAction,
                saw_other_car: sawOtherCar,
                evasive_action: evasiveAction,
                iv_poi: ivPoi,
                cv_poi: cvPoi,
                date_created: currentDate,
                date_updated: currentDate
            }

            props.setAccidentCode(laneChangeFault(
                ivAction, 
                cvAction, 
                ivPoi, 
                cvPoi, 
                sawOtherCar, 
                evasiveAction))

            dispatch(addLaneChange(newLoss))

        } else if (accidentType === "backing") {

            const newLoss = {
                accident_type: "backing",
                iv_action: ivAction,
                cv_action: cvAction,
                saw_other_car: sawOtherCar,
                evasive_action: evasiveAction,
                iv_stopped_or_moving: ivStoppedOrMoving,
                cv_stopped_or_moving: cvStoppedOrMoving,
                iv_distance_out: ivDistanceOut,
                cv_distance_out: cvDistanceOut,
                iv_poi: ivPoi,
                cv_poi: cvPoi,
                date_created: currentDate,
                date_updated: currentDate
            }

            props.setAccidentCode(backingFault(
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

            dispatch(addBacking(newLoss))
        }
    }

    const handleDisable = () => {
        if (accidentType === "rearEnd" &&
            numberOfCars &&
            carPosition
        ) {
            return false
        } else if (
            accidentType === "laneChange" &&
            ivAction &&
            sawOtherCar &&
            cvAction &&
            ivPoi &&
            cvPoi
        ) {
            return false
        } else if (
            accidentType === "backing" &&
            ivAction &&
            sawOtherCar &&
            ivStoppedOrMoving &&
            cvAction &&
            cvStoppedOrMoving &&
            ivPoi &&
            cvPoi
        ) {
            return false
        } else {
            return true
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
                        disabled={handleDisable()}
                    >
                        So who's fault is this?
                    </Button>
                </div>
            
        </div>
    )
}