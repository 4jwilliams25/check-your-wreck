import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: "5px"
    },
    title: {
        flexGrow: 1,
    }
}))

export default function TopBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Check Yo Wreck
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}