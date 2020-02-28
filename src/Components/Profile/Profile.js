import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button
} from '@material-ui/core';

export default function Profile() {
    return (
    <div>
        <div>My Profile</div>
        <Link to="/" style={{textDecoration: "none"}}>
            <Button variant="contained" color="primary">Back</Button>
        </Link>
    </div>
    )
}