import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
      <Header></Header>
        <Nav></Nav>
  </React.StrictMode>,
  document.getElementById('root')
);