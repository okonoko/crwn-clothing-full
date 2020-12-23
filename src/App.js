import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './pages/homepage.styles.scss';

import HomePage from "./pages/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>

)

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
