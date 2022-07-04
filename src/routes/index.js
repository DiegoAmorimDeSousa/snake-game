import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from '../styles/global.js';
import { BrowserRouter } from 'react-router-dom';

import SnakePainel from '../pages/SnakePainel';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Router>
          <Switch>
            <Route exact path='/' component={SnakePainel} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App;