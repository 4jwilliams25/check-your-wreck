import React from 'react';

import { Paper, Box } from '@material-ui/core';

export default function TabPanel(props) {
    const { children, value, index } = props

    return (
        <Paper
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tabpanel-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Paper>
    )
}