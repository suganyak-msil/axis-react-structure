import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { analyticsReportHandler } from './utils/analytics/analyticsReportHandler';
// import store from "./globalstore/store";

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <Provider store={store}>
  <App />
  // </Provider>
  // </React.StrictMode>
);

reportWebVitals(analyticsReportHandler);