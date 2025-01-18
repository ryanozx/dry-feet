import React, { useState } from 'react';
import { Box, Button, Slide } from '@mui/material';

const SlidingBox = () => {
  const [open, setOpen] = useState(false);

  const toggleBox = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Button to toggle the box */}
      <Button variant="contained" onClick={toggleBox}>
        {open ? 'Close' : 'Open'} Sliding Box
      </Button>

      {/* Sliding Box */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '80vh', // 80% of the viewport height
            backgroundColor: 'lightblue',
            boxShadow: 3,
            padding: 2,
            zIndex: 1200, // Ensures it appears above most elements
          }}
        >
          <Button onClick={toggleBox}>
            Close
          </Button>
          <div>
            <h2>Sliding Box Content</h2>
            <p>This box slides up and down when toggled.</p>
          </div>
        </Box>
      </Slide>
    </div>
  );
};

export default SlidingBox;