import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './Components/Layout/TopBar';
import NavBar from './Components/Layout/NavBar';
import AccidentForm from './Components/Forms/AccidentForm';
import Homepage from './Components/Layout/Homepage';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
        {/* <CssBaseline /> */}
        <TopBar />
        <NavBar />
    </div>
  );
}

export default App;
