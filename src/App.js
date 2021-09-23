import React from "react";
import "./App.css";
import Header from "./Header";
import Hob from "./Hob";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from "./Checkout";

function App() {
  return (
    //BEM
    <Router>
    <div className="app">
          <Header />

          <Switch>
              <Route path="/checkout">
                <Header/>
                  <Checkout />
              </Route>
              <Route path="/">
              <Header/>
              <Hob />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
 