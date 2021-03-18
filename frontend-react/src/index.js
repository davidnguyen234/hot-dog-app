import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/App.css';
import './css/Map.css';
import './css/Header.css';
ReactDOM.render(
  <React.StrictMode>
        <Nav></Nav>
  </React.StrictMode>,
  document.getElementById('root')
);