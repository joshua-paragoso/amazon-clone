import React from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        {/* Header will now appear on both home and checkout */}
        
        
        <Switch> 
          
          <Route path="/login">  {/* goes to login page */}
            <Login/>
          </Route>

          <Route path="/checkout">  {/* goes to checkout page */}
            <Header />
            <Checkout/>
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
