import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import AddressInput from './AddressInput';

export default function AddressForm() {

  const methods = useForm();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
          </Grid>
        </form>
      </FormProvider>
    </React.Fragment >
  );
}
