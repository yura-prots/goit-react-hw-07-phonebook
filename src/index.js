import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from 'components/App';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/store.js';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    tomato: '#FF6347',
    green: '#90EE90',
    blue: '#59D5E0',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
