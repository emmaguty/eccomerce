import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { createTheme } from '@mui/system';

import logo from '../../assets/images/logo.png';

import './Navbar.css';

export default function ButtonAppBar() {
  const theme = createTheme();

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
          
          <Typography sx={{ flexGrow: 1, textAlign: 'end', marginRight: '1rem' }} variant="h6" component="p" color="black">
            <p>Hello Guest</p>
          </Typography>
          <div className="app__Navbar_button">
            <Button variant="outlined" color="inherit">
                <strong>Sign In</strong>
            </Button>
            <IconButton aria-label="Show cart items" color="inherint" sx={{ marginLeft: theme.spacing(2) }}>
                <Badge badgeContent={2} color="secondary">
                <ShoppingCart
                    fontSize="large"
                    className="app__Navbar_icon-Shopping" />
                </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}