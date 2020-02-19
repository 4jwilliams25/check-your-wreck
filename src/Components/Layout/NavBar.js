import React from 'react';
import { Paper, Tabs, Tab, makeStyles, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';

import TabPanel from './TabPanel';
import Homepage from './Homepage';
import AccidentForm from '../Forms/AccidentForm';
import FAQ from '../FAQ/FAQ';

function allyProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tab-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    }
}))

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);

    };

    const handleChangeIndex = index => {
        setValue(index)
    }

    return (
        <div className={classes.root}>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    variant="fullWidth"
                >
                        <Tab label="Home" {...allyProps(0)} />
                        <Tab label="Accident Form" {...allyProps(1)} />
                        <Tab label="FAQ"  {...allyProps(2)} />
                </Tabs>
            </Paper>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Homepage />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <AccidentForm />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <FAQ />
                </TabPanel>
            </SwipeableViews>
        </div>
    )
}