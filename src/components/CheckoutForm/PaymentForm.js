import * as React from 'react';

import { Button, Divider, Typography } from '@mui/material';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../stateProvider';

import {accouting} from 'accounting';

const stripePromise = loadStripe("pk_test_51MfUQRI8refubrkfUd6JucgcIpbiweA9LUIWGyJD7hYVqJoudMjaLD7cISxviueSMhpWlZlXR4QHlHkgeNPAm8Qd00y4OQ7tHl");

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(230, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc"
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
}

const CheckoutForm = ({ backStep, nextStep }) => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <form>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
        <Button variant="outlined" onClick={backStep}>Back</Button>
        <Button type="submit" variant="outlined" color="primary" disabled={true} > `Pay ${getBasketTotal(basket)}`</Button>
      </div>
    </form>
  )
}

export default function PaymentForm({ backStep, nextStep }) {
  return (
    <React.Fragment>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements>
    </React.Fragment>
  );
}

{/* <Typography variant="h6" gutterBottom>
Payment method
</Typography>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="cardName"
    label="Name on card"
    fullWidth
    autoComplete="cc-name"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="cardNumber"
    label="Card number"
    fullWidth
    autoComplete="cc-number"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="expDate"
    label="Expiry date"
    fullWidth
    autoComplete="cc-exp"
    variant="standard"
  />
</Grid>
<Grid item xs={12} md={6}>
  <TextField
    required
    id="cvv"
    label="CVV"
    helperText="Last three digits on signature strip"
    fullWidth
    autoComplete="cc-csc"
    variant="standard"
  />
</Grid>
<Grid item xs={12}>
  <FormControlLabel
    control={<Checkbox color="secondary" name="saveCard" value="yes" />}
    label="Remember credit card details for next time"
  />
</Grid>
</Grid> */}
