import React from 'react';
import { Link } from 'react-router-dom';

import { responses } from '../Forms/AccidentCodes/CodeResponses';

export default function AccidentReport (props) {
    return (
        <div>
            <h3>{props.accidentCode ? responses[props.accidentCode][0] : ''}</h3>
            <h3>{props.accidentCode ? responses[props.accidentCode][1] : ''}</h3>

            <Link to="/">
                Back to Form
            </Link>
        </div>
    )
}