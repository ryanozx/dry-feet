import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import Header from './Header';
import Home from './Home';
import Map from './Map';
import MyAutocomplete from './MyAutocomplete';

function App() {
  const onFormSubmit= (e) => e.preventDefault();

  return (
    <Grid 
      container 
      sx={{
        width: '100vw',
        justifyContent: 'center'
      }}
      spacing={2}
      padding={2}
    >
      <Grid size={12} sx={{justifyContent:'center'}}>
        <Typography variant="h1">Dry Feet</Typography>
      </Grid>
      <Box component="form" onSubmit={onFormSubmit}>

      </Box>
      <Grid size={12} container columnSpacing={2}>
        <Grid size={6}>
          <MyAutocomplete />
        </Grid>
        <Grid size={6}>
          <MyAutocomplete />
        </Grid>
      </Grid>
      <Grid size={12}></Grid>
    </Grid>

>>>>>>> Stashed changes
  );
}

export default App;
