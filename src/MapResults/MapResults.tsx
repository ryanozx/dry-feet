import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import NoRouteError from './NoRoutePage';

import MapContainer from './MapContainer';
import MapInstructions from './MapInstructions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MapResults({open, setOpen, data, setData}) {


  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'sticky' }}>
          <Toolbar>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Back
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent sx={{ display: 'flex', flex: 1, padding: 0 }}>
        <Grid
            container
            sx={{ 
              height: '100%',
              flex: 1
            }} // Full height of the dialog content
          >
            {/* Left Container */}
            <Grid
              item
              xs={12} // Full width on mobile
              md={8} // Two third on desktop
              sx={{
                height: { xs: '60%', md: '100%' }, // Adjust height for mobile and desktop
                backgroundColor: 'lightblue',
              }}
            >
              <MapContainer />
            </Grid>

            {/* Right Container */}
            <Grid
              item
              xs={12} // Full width on mobile
              md={4} // One third on desktop
              sx={{
                height: { xs: '40%', md: '100%' }, // Adjust height for mobile and desktop
                backgroundColor: 'lightgreen',
                overflow: 'auto',
              }}
            >
              {data.pathAvailable ?
              <MapInstructions instructions={data.path}/> 
            : <NoRouteError />}
              
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      
  );
}