import React from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        {/* Header will now appear on both home and checkout */}
        <Header />
        
        <Switch> 
          
          <Route path="/login">  {/* goes to login page */}
            <h1> LOGIN PAGE</h1>
          </Route>

          <Route path="/checkout">  {/* goes to checkout page */}
            <Checkout/>
          </Route>
          
          
          <Route path="/">{/* goes to main page */}
            <Home />
          </Route>

        </Switch>
      
      </div>

    </Router>

  );
}

export default App;
