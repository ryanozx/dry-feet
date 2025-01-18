import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Grid2 as Grid } from '@mui/material';
import Header from './Header';
import Home from './Home';
import Map from './Map';

function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <Grid container>
      <Header onClick = {() => setIsHome(true)} />
      {
        isHome ?
        <Home /> :
        <Map />
      }
    </Grid>

  );
}

export default App;
