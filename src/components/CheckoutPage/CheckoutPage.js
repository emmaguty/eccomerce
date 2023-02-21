import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// import useStateValue from '../StateProvider';

import Products_data from '../../constants/product-data';
// import CheckoutCard from '../CheckoutCard/CheckoutCard';
import Product from '../Product';
// import Total from '../Total/Total';

const CheckoutPage = () => {
    // const [{ basket }, dispatch] = useStateValue();

    function FormRow() {
        return (
            <React.Fragment>
                {Products_data?.map((item) => (
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <Product key={item.id} product={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    return (
        <div sx={{flexGrow: 1, padding: '2rem' }}>
            <Grid container xs={{marginTop: 0}}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4' sx={{marginTop: '1rem',marginBottom: 0}}>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Total
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutPage;