import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/pages/Home";
import Monitor from "./components/pages/Monitor/index";
import NotFound from "./components/pages/Notfound";
export default () => (

  <Router>
    <div className="App">

      <Switch>
        <Route exact path="/" component={() => <Home />} />
      <Route exact path="/:id" component={() => <Monitor />} />
       
       

        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

