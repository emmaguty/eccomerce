import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// import useStateValue from '../StateProvider';

import Products_data from '../../constants/product-data';
import CheckoutCard from './CheckoutCard/CheckoutCard';

const CheckoutPage = () => {
    // const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {basket?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        )
    }
}

export default CheckoutPage;