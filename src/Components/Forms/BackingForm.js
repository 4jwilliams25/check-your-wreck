import React from 'react';

export default function BackingForm(props) {

    let evasiveAction = (
        <div>
            <div>Did you take any evasive action? (swerve, hit brakes, honk horn, etc.)</div>
            <select required onChange={e => props.setEvasiveAction(e.target.value)}>
                <option value=""></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="noTime">I didn't have time</option>
            </select>
        </div>
    )

    let ivDistanceOut = (
        <div>
            <div>How far out of your parking space was your vehicle at the time of the impact?</div>
            <select required onChange={e => props.setIvDistanceOut(e.target.value)}>
                <option value=""></option>
                <option value="<quarter">Less than a quarter of the way</option>
                <option value="quarter">Quarter of the way out</option>
                <option value="half">Halfway out</option>
                <option value="3quarters">Three quarters of the way</option>
                <option value="fully">All the way out of the space</option>
            </select>
        </div>
    )

    let cvDistanceOut = (
        <div>
            <div>How far out of their parking space was the other vehicle at the time of the impact?</div>
            <select required onChange={e => props.setCvDistanceOut(e.target.value)}>
                <option value=""></option>
                <option value="<quarter">Less than a quarter of the way</option>
                <option value="quarter">Quarter of the way out</option>
                <option value="half">Halfway out</option>
                <option value="3quarters">Three quarters of the way</option>
                <option value="fully">All the way out of the space</option>
            </select>
        </div>
    )

    return (
        <div>

            <div>Were you backing or going forward at the time of the impact?</div>
            <select required onChange={e => props.setIvAction(e.target.value)}>
                <option value=""></option>
                <option value="backing">I was backing</option>
                <option value="forward">I was moving forward</option>
            </select>

            <br />

            <div>Did you see the other car before the impact?</div>
            <select required onChange={e => props.setSawOtherCar(e.target.value)}>
                <option value=""></option>
                <option value="yes">I saw the other vehicle before the impact</option>
                <option value="no">I didn't see the vehcile until or after the impact</option>
            </select>

            <br />

            {props.sawOtherCar === "yes" ? evasiveAction : ''}

            <br />

            <div>Was the other vehicle backing or moving forward at the time of the impact</div>
            <select required onChange={e => props.setCvAction(e.target.value)}>
                <option value=""></option>
                <option value="backing">They were backing</option>
                <option value="forward">They were moving forward</option>
                <option value="unknown">I dont know</option>
            </select>

            <br />

            <div>Was your vehicle stopped or in motion at the time of the impact?</div>
            <select required onChange={e => props.setIvStoppedOrMoving(e.target.value)}>
                <option value=""></option>
                <option value="stopped">My car was stopped</option>
                <option value="moving">My car was in motion</option>
            </select>

            <br />

            <div>Was the other vehicle stopped or in motion at the time of the impact?</div>
            <select required onChange={e => props.setCvStoppedOrMoving(e.target.value)}>
                <option value=""></option>
                <option value="stopped">Their car was stopped</option>
                <option value="moving">Their car was in motion</option>
                <option value="unknown">I don't know</option>
            </select>

            <br />

            {props.ivAction === "backing" ? ivDistanceOut : ''}
            <br />
            {props.cvAction === "backing" ? cvDistanceOut : ''}

            <br />

            <div>What part of your car initially came into contact with the other car?</div>
            <select required onChange={e => props.setIvPoi(e.target.value)}>
                <option value=""></option>
                <option value="frontBumper">Front Bumper</option>
                <option value="leftFrontCorner">Driver Side Front Corner</option>
                <option value="rightFrontCorner">Passenger Side Front Corner</option>
                <option value="rearBumper">Rear Bumper</option>
                <option value="leftRearCorner">Driver Side Rear Corner</option>
                <option value="rightRearCorner">Passenger Side Rear Corner</option>
                <option value="leftSide">Driver Side</option>
                <option value="leftFender">Driver Side Front Fender</option>
                <option value="leftQuarter">Driver Side Rear Quarter Panel</option>
                <option value="rightSide">Passenger Side</option>
                <option value="rightFender">Passenger Side Front Fender</option>
                <option value="rightQuarter">Passenger Side Rear Quarter Panel</option>
            </select>

            <br />

            <div>What part of the other car initially came into contact with your car?</div>
            <select required onChange={e => props.setCvPoi(e.target.value)}>
                <option value=""></option>
                <option value="frontBumper">Front Bumper</option>
                <option value="leftFrontCorner">Driver Side Front Corner</option>
                <option value="rightFrontCorner">Passenger Side Front Corner</option>
                <option value="rearBumper">Rear Bumper</option>
                <option value="leftRearCorner">Driver Side Rear Corner</option>
                <option value="rightRearCorner">Passenger Side Rear Corner</option>
                <option value="leftSide">Driver Side</option>
                <option value="leftFender">Driver Side Front Fender</option>
                <option value="leftQuarter">Driver Side Rear Quarter Panel</option>
                <option value="rightSide">Passenger Side</option>
                <option value="rightFender">Passenger Side Front Fender</option>
                <option value="rightQuarter">Passenger Side Rear Quarter Panel</option>
            </select>
            
        </div>
    )
}