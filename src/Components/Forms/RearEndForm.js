import React from 'react';

export default function RearEndForm(props) {

    // Conditionally Rendered Questions
    let hitOrPushed = (
        <div>
            <div>Did you hit the car in front of you first or were you pushed?</div>
                <select required onChange={e => props.setPushed(e.target.value)}>
                    <option value=""></option>
                    <option value="rearEnded">
                        I hit the car in front, then was rear ended
                    </option>
                    <option value="pushed">
                        I was hit from behind first, then pushed into the car in front of me
                    </option>
                </select>
        </div>
    )

    return(
        <div>

            <div>How many cars were there?</div>
            <select required onChange={e => props.setNumberOfCars(e.target.value)}>
                <option value=""></option>
                <option value="2">Two cars</option>
                <option value=">2">More than two cars</option>
            </select>

            <br />

            <div>Where was your car?</div>
            <select required onChange={e => props.setCarPosition(e.target.value)}>
                <option value=""></option>
                <option value="front">The front car</option>
                <option value="back">The back car</option>
                {props.numberOfCars === ">2" ? <option value="middle">Somewhere in the middle</option> : ''}
            </select>

            <br />

            {props.carPosition === "middle" ? hitOrPushed : ''}
        </div>
    )
}