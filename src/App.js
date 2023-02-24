import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { actionTypes } from './reducer';
import { useStateValue } from './stateProvider';
import Checkout from './components/CheckoutForm/Checkout';

import { auth } from './firebase/firebase';


// import NotFound from './components/NotFound/NotFound';

import './App.css';

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/sign-in" >
            <SignIn />
          </Route>
          <Route path="/sign-up" >
            <SignUp />
          </Route>
          <Route path="/checkout-page" >
            <CheckoutPage />
          </Route>
          <Route path="/checkout" >
            <Checkout />
          </Route>
          <Route path="/" >
            <Products />
          </Route>
          {/* <Route path="*" element{<NotFound/>}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
