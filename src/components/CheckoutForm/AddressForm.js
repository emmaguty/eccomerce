import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';

import AddressInput from './AddressInput';
import { Button } from '@mui/material';

export default function AddressForm({nextStep}) {

  const methods = useForm();
  const [{ shippingData }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data=> {
          dispatch({
            type: actionTypes.SET_SHIPPINGDATA,
            shippingData: data,
          });
          nextStep();
          
        })}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address" label="Address" />
            <AddressInput required name="email" label="Email Address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
            <Button component={Link} to="/checkout-page">
              Back
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
        </div>
        </form>
      </FormProvider>
    </React.Fragment >
  );
}
