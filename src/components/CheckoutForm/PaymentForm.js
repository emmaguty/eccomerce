import * as React from 'react';
// import { useState } from 'react';

import { Button, CircularProgress, Divider, Typography } from '@mui/material';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';
import { getBasketTotal, actionTypes } from '../../reducer';
import { useStateValue } from '../../stateProvider';

import { accouting } from 'accounting';
import axios from 'axios';

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
  const [{ basket, paymentMessage }, dispatch] = useStateValue();
  const [loading, setLoading ] = React.useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    setLoading(true);
    if (!error) {

      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id: id,
            amount: getBasketTotal(basket) * 100,
          });

        dispatch({
          type: actionTypes.SET_PAYMENT_MESSAGE,
          paymentMessage: data.message
        })

        if (data.message === "Success") {
          dispatch({
            type: actionTypes.EMPTY_BASKET,
            basket: []
          });
        }

        elements.getElement(CardElement).clear();
        nextStep();
      }
      catch (error) {
        console.log(error);
        nextStep();
      }
      setLoading(false);
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
        <Button variant="outlined" onClick={backStep}>Back</Button>
        <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
          {
            loading ? (<CircularProgress />) 
            : (`Pay ${getBasketTotal(basket)}`) 
          }
        </Button>
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

