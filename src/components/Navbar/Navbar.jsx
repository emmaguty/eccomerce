import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';

import { useStateValue } from '../StateProvider';

import { auth } from '../firebase';

import { actionTypes } from "../reducer";

import logo from '../../assets/images/logo.png';

import './Navbar.css';

const Navbar = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            history.push("/");
        }
    };

    return (
        <div className='root'>
            <AppBar position='fixed' className="appBar">
                <Toolbar>
                    <Link to="/">
                        <IconButton>
                            <img
                              src={logo}
                              alt="Commerce.js"
                              height='25px'
                              className='image__logo'
                            />
                        </IconButton>
                    </Link>

                    <div className='app__navbar_grow'>
                    <Typography variant="h6" color="textPrimary" component="p">
                        Hello {user ? user.email : "Guest"}
                    </Typography>
                    <div className='app__Navbar_button'>
                        <Link to={!user && "/signin"}>
                            <Button onClick={handleAuth} variant='outlined'>
                                <strong>{user ? "Sign Out" : "Sign In"}</strong>
                            </Button>
                        </Link>

                        <Link to="/checkout-page">
                            <IconButton aria-label='show cart items' color="inherit">
                                <Badge badgeContent={basket?.length} color="secondary">
                                    <ShoppingCart fontSize="large" color="primary"></ShoppingCart>
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}


