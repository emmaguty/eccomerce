import * as React from 'react';

import { Button, Divider, Typography } from '@mui/material';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';
import { getBasketTotal } from '../../reducer';
import { useStateValue } from '../../stateProvider';

import { accouting } from 'accounting';

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

  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    if (!error) {
      const { id } = paymentMethod;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <Button variant="outlined" onClick={backStep}>Back</Button>
        <Button type="submit" variant="contained" color="primary" disabled={false} > Pay ${getBasketTotal(basket)}</Button>
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
