import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { appPersistor, appStore } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './style.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <PersistGate persistor={appPersistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
