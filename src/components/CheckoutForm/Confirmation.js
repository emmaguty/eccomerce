import React from 'react';

import { Divider, Typography } from '@mui/material';

const Confirmation = ({ message }) => {
    console.log(message)
    return (
        <>
            <Typography variant='h6'>{message}</Typography>
            <Divider />
        </>
    )
}

export default Confirmation