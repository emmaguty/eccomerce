import React, { useState } from 'react';

import { Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

// import { createTheme } from '@mui/system';

const Checkout = () => {
  // const theme = createTheme();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((nextActiveStep) => nextActiveStep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm />

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={0} sx={{ pt: 3, pb: 5 }}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
        </Paper>
      </Container>
    </>
  )
}

export default Checkout