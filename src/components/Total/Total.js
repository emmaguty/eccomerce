import React from 'react';

import Button from '@mui/material/Button';

import accounting from 'accounting';

import { getBasketTotal } from '../../reducer';
import { useStateValue } from  '../../stateProvider';

const Total = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
            <h5>Total items: {basket?.length}</h5>
            <h4> {accounting.formatMoney(getBasketTotal(basket))} </h4>
            <Button sx={{marginTop: '2rem'}} color="secondary" variant="contained" >Check Out</Button>
        </div>
    )
}

export default Total