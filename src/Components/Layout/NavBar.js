import React from 'react';
import { NavLink } from 'react-router-dom';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant="fullWidth"
            >
                    <Tab label="Home" />
                    <Tab label="Accident Form" />
                    <Tab label="FAQ" />
            </Tabs>
        </Paper>
    )
}