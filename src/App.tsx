import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Grid2 as Grid, Typography, Button, Card, TextField } from '@mui/material';
import MyAutocomplete from './MyAutocomplete';
import MyCheckbox from './MyCheckbox';
import { getLocations, queryPath } from './api/api';
import backgroundImage from './images/backgroundImage.png';
import icon from './images/icon.jpg';
import MapResults from './MapResults/MapResults';

function App() {
  const [isSheltered, setIsSheltered] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [locations, setLocations] = useState([]);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [data, setData] = useState({path: [], pathAvailable: false});

  useEffect(() => {
    (async () => {
      const data = await getLocations();
      setLocations(data);
    })();
  }, []);

  const onFormSubmit= async (e) => {
    e.preventDefault();
    const queryData = await queryPath(startLocation, endLocation, isSheltered, isAccessible);
    setData(queryData);
    setShowMap(true);
  }

  const submitReady = !!startLocation && !!endLocation && startLocation !== endLocation;
  const sameLocation = !!startLocation && !!endLocation && startLocation === endLocation;

  return (
    <Grid 
      container 
      sx={{
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'centre',
        backgroundRepeat: 'no-repeat'
      }}
      padding={2}
      paddingTop={8}
    >
      <Grid sx={{paddingTop: '20vh'}}>
        <Card sx={{borderRadius: 10, bgcolor: 'rgba(255, 255, 255, 0.8)'}}>
          <Grid container size={12} maxWidth="700px" sx={{justifyContent:'center'}} padding={5}>
            <Grid container spacing={2} paddingBlock={2}>
              <Typography variant="h1">Dri-Feet</Typography>
              <Box>
                <img src={icon} width="100rem" height="100rem" style={{borderRadius: '1.5rem'}}/>
              </Box>
            </Grid>
            <Grid size={12}>
              <Box component="form" onSubmit={onFormSubmit}>
                <Grid size={12} container columnSpacing={2} rowSpacing={2}>
                  <Grid size={12}>
                    <MyAutocomplete 
                      label="Start location"
                      options={locations}
                      onChange={(_,v) => setStartLocation(v)}
                    />
                  </Grid>
                  <Grid size={12}>
                    <MyAutocomplete 
                      label="End location"
                      options={locations}
                      onChange={(_,v) => setEndLocation(v)}
                    />
                  </Grid>
                  <Grid size={5}>
                    <MyCheckbox
                      label="Require accessible paths?"
                      isChecked={isAccessible}
                      onChange={() => setIsAccessible(!isAccessible)}
                    />
                  </Grid>
                  <Grid size={5}>
                    <MyCheckbox
                      label="Require sheltered paths?"
                      isChecked={isSheltered}
                      onChange={() => setIsSheltered(!isSheltered)}
                    />
                  </Grid>
                  <Grid size={2} container sx={{justifyContent: 'center'}}>
                    <Grid size={12} container sx={{justifyContent: 'center'}}>
                      <Button type="submit" variant="contained" color="primary" disabled={!submitReady} fullWidth sx={{borderRadius: 10}}>
                        Submit
                      </Button>
                    </Grid>
                    { 
                      sameLocation &&
                      <Grid size={12} container sx={{justifyContent: 'center'}}>
                        <Typography color="error">The same start and end location is selected</Typography>
                      </Grid>
                    }
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <MapResults open={showMap} setOpen={setShowMap} data={data} setData={setData}/>
    </Grid>

  );
}

export default App;
