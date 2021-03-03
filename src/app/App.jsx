/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';

// -----------------------------------------------------------------------------------

export default function App() {

  // -----------------------------------------------------------------------------------

  return (
    <div>
      <Router>

        <Switch>

          <Route
            path="/"
            exact
            component = { Welcome } 
          />
            
        </Switch>

      </Router>
    </div>
  );
}

