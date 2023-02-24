import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { createTheme } from '@mui/system';

import { useStateValue } from '../../stateProvider';

import logo from '../../assets/images/logo.png';

import './Navbar.css';

export default function ButtonAppBar() {
  const theme = createTheme();
  const [{ basket }, dispatch] = useStateValue();

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
            <p>Hello Guest</p>
          </Typography>
          <div className="app__Navbar_button">
            <Link to="/sign-in" sx={{textDecoration: 'none'}}>
              <Button variant="outlined" color="inherit" sx={{ color: 'black' }}>
                <strong>Sign In</strong>
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