import * as React from 'react';
import { Box, ThemeProvider } from '@mui/system';

interface vars {
  w: number,
  h: number
}

export default function MyComponent2(props:vars) {
  const width = props['w']
  const height = props['h']

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: width,
          height: height,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
}