import React from 'react';

export default function LaneChangeForm(props) {

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

    return(
        <div>

            <div>Were you going straight or changing lanes at the time of impact?</div>
            <select required onChange={e => props.setIvAction(e.target.value)}>
                <option value=""></option>
                <option value="straight">I was going straight in my lane</option>
                <option value="changing">I was changing lanes</option>
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

            <div>Was the other vehicle going straight or changing lanes at the time of the impact?</div>
            <select required onChange={e => props.setCvAction(e.target.value)}>
                <option value=""></option>
                <option value="straight">They were going straight in their lane</option>
                <option value="changing">They were changing lanes</option>
                <option value="unknown">I dont know</option>
            </select>

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