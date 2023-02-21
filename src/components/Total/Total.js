import React from 'react';

import Button from '@mui/material/Button';

import accounting from 'accounting';

const Total = () => {
    return (
        <div sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
            <h5>Total items: 3</h5>
            <h4>{accounting.formatMoney(50)}</h4>
            <Button sx={{marginTop: '2rem'}} color="secondary" variant="contained" >Check Out</Button>
        </div>
    )
}

export default Total