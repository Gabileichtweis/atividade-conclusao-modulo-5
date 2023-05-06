import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import defaultTheme from './config/theme/defaulttheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
