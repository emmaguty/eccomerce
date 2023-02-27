import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Typography } from '@mui/material';

const Confirmation = ({ message }) => {
    console.log(message)
    return (
        <>
            <Typography variant='h6'>{message}</Typography>
            <Divider />
            <Typography variant='subtitle2' gutterBottom>
                {message === "Success"
                    ? "You booking reference was successfully: ASDASDAS213"
                    : "Error"}
            </Typography>
            <Button component={Link} to="/" variant="outlined" type="button">
                Back to Home Page
            </Button>
        </>
    )
}

export default Confirmation