import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './core/GlobalStyle';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { Normalize } from 'styled-normalize';
import App from './core/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
