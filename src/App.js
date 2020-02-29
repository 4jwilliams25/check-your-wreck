import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import { getRearEnds } from '../src/Store/rearEnders/rearEndActions';

import TopBar from './Components/Layout/TopBar';
import NavBar from './Components/Layout/NavBar';
import Profile from './Components/Profile/Profile';

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRearEnds());
  }, [dispatch])

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
