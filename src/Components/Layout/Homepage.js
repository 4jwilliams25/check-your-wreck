import React from 'react';

import Image from 'material-ui-image';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import CarWreck from '../../Images/carwreck.jpg'

export default function Homepage() {

    return (
        <div>
            <Grid 
                container
                spacing={3}
            >
                <Grid item xs={12}>
                    <Typography color="primary" align="center">
                        Welcome to Check Yo Wreck! The web application for figuring out who's at fault for your accident and why. 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="primary" align="center">
                        Using our accident form we will gather the most impactful (see what we did there?) details of your auto accident, tell you what the probable fault decision will be, and help you understand why. You can also get answers to some of the most commonly asked questions for these types of claims in the FAQ. 
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="primary" align="center">
                        Currently this website works for 3 of the most common types of accidents; rear ends, lane changes, and backing accidents. We will continue to add additional supported accident types over time.
                    </Typography>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Image 
                        src={CarWreck} 
                        imageStyle={{width: '100%', height: 'inherit'}} 
                    />
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </div>
    )
}