import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from 'components/App';
import { GlobalStyle } from './styles/GlobalStyle';
import { store } from './redux/store.js';

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    red: '#FF0000',
    tomato: '#FF6347',
    green: '#90EE90',
    violet: '#EE82EE',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
