// TODO: add a section that displays their answers on the form
// TODO: add a second page that takes probable liab, drivability, coverage and gives recomendations

import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, makeStyles } from '@material-ui/core';

import { responses } from '../Forms/AccidentCodes/CodeResponses';

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        padding: 15
    }
}))

export default function AccidentReport (props) {
    const classes = useStyles();

    return (
        <Paper elevation={2} className={classes.root}>
            <Typography
                color="primary" 
                variant="subtitle1"
                paragraph={true}
                align="justify"
            >
                {props.accidentCode ? responses[props.accidentCode][0] : ''}
            </Typography>

            {props.accidentCode ? <Typography color="primary" variant="h6" align="center">
                Basic Concepts:
            </Typography> : ''}

            <Typography
                color="primary" 
                variant="subtitle1"
                paragraph={true}
                align="justify"
            >
                {props.accidentCode ? responses[props.accidentCode][1] : ''}
            </Typography>

            {props.accidentCode && responses[props.accidentCode][2] ? <Typography color="primary" variant="h6" align="center">
                For Your Accident:
            </Typography> : ''}

            <Typography
                color="primary" 
                variant="subtitle1"
                paragraph={true}
                align="justify"
            >
                {props.accidentCode ? responses[props.accidentCode][2] : ''}
            </Typography>

            <Link to="/">
                Back to Form
            </Link>
        </Paper>
    )
}