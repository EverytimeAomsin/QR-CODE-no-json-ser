import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/pages/Home";
import Monitor from "./components/pages/Monitor/index";
import Admin from "./components/pages/Admin/index";
import View from "./components/pages/Admin/View";
export default () => (

  <Router>

      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/admin" component={() => <Admin />} />
        <Route  path="/admin/:id" component={() => <View />} />
      <Route  path="/:id" component={() => <Monitor />} />    
      </Switch>
    
  </Router>
);

