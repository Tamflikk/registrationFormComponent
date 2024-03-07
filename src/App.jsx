import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { Register } from './components/register';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#242424',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}>
        <Register />
      </Box>
    </ThemeProvider>
  );
}

export default App;
