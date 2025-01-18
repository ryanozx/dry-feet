import React, { useEffect, useState } from 'react';
import './App.css';
import { Box, Grid2 as Grid, Typography, Button, Card } from '@mui/material';
import MyAutocomplete from './MyAutocomplete';
import MyCheckbox from './MyCheckbox';
import { getLocations, queryPath } from './api/api';
import backgroundImage from './images/backgroundImage.jpg';
import MapResults from './MapResults/MapResults';

function App() {
  const [isSheltered, setIsSheltered] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [locations, setLocations] = useState([]);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [data, setData] = useState({path: []});

  useEffect(() => {
    (async () => {
      const data = await getLocations();
      setLocations(data);
    })();
  })

  const onFormSubmit= async (e) => {
    e.preventDefault();
    const queryData = await queryPath(startLocation, endLocation, isSheltered, isAccessible);
    setData(queryData);
    setShowMap(true);
  }

  const submitReady = !!startLocation && !!endLocation;

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
      <Grid>
        <Card>
          <Grid container size={12} maxWidth="1000px" sx={{justifyContent:'center'}} padding={2}>
            <Grid>
              <Typography variant="h1">Dry Feet</Typography>
            </Grid>
            <Grid size={12}>
              <Box component="form" onSubmit={onFormSubmit}>
                <Grid size={12} container columnSpacing={2}>
                  <Grid size={6}>
                    <MyAutocomplete 
                      label="Start location"
                      options={locations}
                      onChange={(_,v) => setStartLocation(v)}
                    />
                  </Grid>
                  <Grid size={6}>
                    <MyAutocomplete 
                      label="End location"
                      options={locations}
                      onChange={(_,v) => setEndLocation(v)}
                    />
                  </Grid>
                  <Grid size={6}>
                    <MyCheckbox
                      label="accessible?"
                      isChecked={isAccessible}
                      onChange={() => setIsAccessible(!isAccessible)}
                    />
                  </Grid>
                  <Grid size={6}>
                    <MyCheckbox
                      label="sheltered?"
                      isChecked={isSheltered}
                      onChange={() => setIsSheltered(!isSheltered)}
                    />
                  </Grid>
                  <Grid size={12} container sx={{justifyContent: 'center'}}>
                    <Button type="submit" variant="contained" color="primary" disabled={!submitReady}>
                      Submit
                    </Button>
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
