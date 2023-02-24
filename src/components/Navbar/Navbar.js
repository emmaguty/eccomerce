import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { createTheme } from '@mui/system';

import { auth } from '../../firebase/firebase';

import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';


import logo from '../../assets/images/logo.png';

import './Navbar.css';

export default function ButtonAppBar() {
  const theme = createTheme();
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: []
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null
      })
      history.push("/");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'tomato' }}>
        <Toolbar>

          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                className='image__logo'
                src={logo}
                alt="navbar_logo"
              />
            </IconButton>
          </Link>

          <Typography sx={{ flexGrow: 1, textAlign: 'end', marginRight: '1rem' }} variant="h6" component="p" color="black">
            <p>Hello {user ? user.email : "Guest"}</p>
          </Typography>
          <div className="app__Navbar_button">
            <Link to="/sign-in" sx={{textDecoration: 'none'}}>
              <Button variant="outlined" color="inherit" sx={{ color: 'black' }} onClick={handleAuth}>
                <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            </Link>
            <Link to="checkout-page">
              <IconButton aria-label="Show cart items" color="inherint" sx={{ marginLeft: theme.spacing(2) }}>
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart
                    fontSize="large"
                    className="app__Navbar_icon-Shopping" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}