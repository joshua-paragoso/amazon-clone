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
        
        <Switch> 
          
          {/* goes to checkout page */}
          <Route path="/checkout">
            <Header />
           <Checkout/>
          </Route>
          
          {/* goes to main page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      
      </div>

    </Router>

  );
}

export default App;
