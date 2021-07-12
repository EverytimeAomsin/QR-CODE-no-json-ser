import React from "react";
import Routing from './Route'
import { BrowserRouter as Router } from 'react-router-dom';

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>

<Routing />
</Router>
    </div>
  );
};
export default App;
