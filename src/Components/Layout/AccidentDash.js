import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AccidentForm from '../Forms/AccidentForm';
import AccidentReport from '../Reports/AccidentReport';

export default function AccidentDash () {

    // Form State
    const [accidentCode, setAccidentCode] = React.useState(0)

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AccidentForm
                        accidentCode={accidentCode}
                        setAccidentCode={setAccidentCode}
                    />
                </Route>
                <Route path="/report">
                    <AccidentReport accidentCode={accidentCode} />
                </Route>
            </Switch>
        </Router>
    )
}