import * as React from 'react';

import { Typography, List, ListItem, ListItemText } from '@mui/material/';

import { useStateValue } from '../../stateProvider';
import { getBasketTotal } from '../../reducer';

import accounting from 'accounting';

// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

export default function Review() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {
          basket?.map(product => (
            <ListItem key={product.name}>
              <ListItemText primary={product.name} secondary={`Qty : ${1}`}></ListItemText>
              <Typography variant="body2">
                {accounting.formatMoney(product.price)}
              </Typography>
            </ListItem>
          ))
        }
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
            {accounting.formatMoney(getBasketTotal(basket))}
          </Typography>
        </ListItem>



      </List>
    </React.Fragment>
  );
}