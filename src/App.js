import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ToolBar from './ToolBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Days from './Component/Days';

export default function App() {
  return(
  <div>
    <CssBaseline/>
    <ToolBar/>
    <Container>
        <Box sx={{ my: 2 }}>
        <Typography variant="h2" component="div" align="center" color="text.primary">
              <Days/>
            </Typography>
            <Typography variant="h5" component="p" align="center" color="text.secondary">
            Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
            </Typography>
        </Box>
      </Container>
  </div>
  );
}

