import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

function AppTwo(){
  return <h1>Here is second App</h1>
}

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  ,
  document.getElementById('root')
);
reportWebVitals();
