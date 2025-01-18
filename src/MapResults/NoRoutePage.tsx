import Box from "@mui/material/Box";
import { ReactComponent as ErrorMascot } from '../images/otter-svgrepo-com.svg';
import { Typography } from "@mui/material";

export default function NoRouteError() {
    return (
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%', // Set desired height
        backgroundColor: 'lightgray',
        overflow: 'hidden'
      }}
    >
      {/* SVG Box */}
      <Box
        sx={{
          width: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ErrorMascot />
      </Box>

      {/* Text Box */}
      <Box
        sx={{
          width: '60%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px', // Fixed font size
            textAlign: 'center',
            paddingInline: '10px'
          }}
        >
          Sorry, we could not find a path that meets your criteria!
        </Typography>
      </Box>
    </Box>
    )
}