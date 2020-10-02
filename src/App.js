import React, {useEffect} from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login"
import Payment from "./Payment";
import Orders from "./Orders"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HVq06AlzYoQd5L57a2NaSouLuLaduAMAguozwnXhXpXZPCnWoMfCniJKWTlOpEJlpvgicgtYUdmkbM3W9MY1RwG00QZSfPThk"
);

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>>', authUser);

      //if there is a authorize user
      if(authUser){
        //the user jsut logged in, the user was logged in
        dispatch({
          type:'SET_USER',
          //send user
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          //set user to null
          user: null
        })
      }
    }) //as soon as app loads, attach listener
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        {/* Header will now appear on both home and checkout */}
        
        
        <Switch> 
          
          <Route path="/login">  {/* goes to login page */}
            <Login/>
          </Route>

          <Route path="/orders">  {/* goes to orders page */}
            <Header />
            <Orders />
          </Route>

          <Route path="/checkout">  {/* goes to checkout page */}
            <Header />
            <Checkout/>
          </Route>

          <Route path="/payment">  {/* goes to payment page */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <Payment /> */}
          </Route>
          
          <Route path="/">{/* goes to main page */}
            <Header />
            <Home />
          </Route>

        </Switch>
      
      </div>

    </Router>

  );
}

export default App;
