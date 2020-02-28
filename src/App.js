import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './Components/Layout/TopBar';
import NavBar from './Components/Layout/NavBar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
          {/* <CssBaseline /> */}
          <TopBar />
          <Switch>
            <Route exact path="/">
              <NavBar />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
