import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/images/logo.png';

import './Navbar.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" sx={{ backgroundColor: 'tomato' }}>
        <Toolbar>
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
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }} color="black">
            Hello Guest
          </Typography>
          <div className="app__Navbar_button">
            <Button variant="outlined" color="inherit">
                <strong>Sign In</strong>
            </Button>
            <ShoppingCart
                fontSize="large"
                className="app__Navbar_icon-Shopping" />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}