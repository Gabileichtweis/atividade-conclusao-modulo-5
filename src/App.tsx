import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appPersistor, appStore } from './store';
import defaultTheme from './config/theme/defaulttheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={appStore}>
        <PersistGate persistor={appPersistor}>
          <CssBaseline />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
