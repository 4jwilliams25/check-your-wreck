import React from 'react';
import { Link } from 'react-router-dom';
import { 
    makeStyles,
    AppBar, 
    Toolbar, 
    Typography,
    Menu,
    MenuItem,
    IconButton
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: "5px"
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: "black",
        textDecoration: "none",
    }
}))

export default function TopBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Check Yo Wreck
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrgin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <Link to="/profile" className={classes.link}>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                            </Link>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}