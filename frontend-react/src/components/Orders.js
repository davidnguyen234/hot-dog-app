// import PropTypes from 'prop-types'
import React from 'react';
//import OrdersList from './OrdersList';
//import Buttons from './Buttons'
//import { render } from "react-dom";
//import { BrowserRouter, Route } from "react-router-dom";
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../css/Order.css';

const Header = ({ title }) => {
  //////////////////////////////////////////////////////////////////////
  // const DeleteOrder = (props) => {
  //   OrdersList.filter((order) => order.order_id !== props);
  //   console.log('deleted');
  // }
  //////////////////////////////////////////////////////////////////////
  return (
    <header className='header'>
      <h1> {title}</h1>
      {/* <p>-----------------------------------------------------------------------------------------------------</p> */}
      {/* <Buttons color='navy' text='Items' onClick={onClick}/>              */}
    </header>
  )
}
Header.defaultProps = {
  title: 'Order List:'
}
export default Header;


