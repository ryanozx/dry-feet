import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function MapInstructions({instructions}) {
    const instructionsList = instructions.map((step, idx) =>
        <ListItemButton key={idx} sx={{ 
            alignItems: 'flex-start',
            paddingBlock: '30px',
            backgroundColor: idx % 2 === 0 ? 'mintcream' : 'aliceblue'}}
            disableRipple
            disableTouchRipple>
            <ListItemIcon sx={{ 
                minWidth: '30px',
                paddingBlock: '5px',
                justifyContent: 'flex-start', 
                alignItems: 'flex-start', // Align the index to the top
            }}>
              {idx + 1}.
            </ListItemIcon>
            <ListItemText primary={step} sx={{textAlign: 'justify'}}/>
        </ListItemButton>
    )

    return (
        <Paper elevation={2}>
        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <List sx={{width: '100%', overflow: 'auto', paddingInline: '3px'}}>
           {instructionsList}
        </List>
        </Box>
        </Paper>
    )
}