import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './Components/Layout/TopBar';
import NavBar from './Components/Layout/NavBar';
import AccidentForm from './Components/Forms/AccidentForm';
import Homepage from './Components/Layout/Homepage';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <CssBaseline /> */}
        <TopBar />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/form" component={AccidentForm} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
