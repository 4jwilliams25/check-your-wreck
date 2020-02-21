import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './Components/Layout/TopBar';
import NavBar from './Components/Layout/NavBar';

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
