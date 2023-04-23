import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';
import { appPersistor, appStore } from './store';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <PersistGate persistor={appPersistor}>
          <CssBaseline />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
