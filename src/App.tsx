import { useState } from 'react';
import './App.css';
import { Grid2 as Grid } from '@mui/material';
import Header from './Header';
import Home from './Home';
import MapResults from './MapResults/MapResults';

function App() {
  const [isHome, setIsHome] = useState(false);
  return (
    <Grid container>
      <Header onClick = {() => setIsHome(true)} />
      {
        isHome ?
        <Home /> :
        <MapResults />
      }
    </Grid>

  );
}

export default App;
