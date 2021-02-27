// import PropTypes from 'prop-types'
import React from 'react';
import OrdersList from './OrdersList';
import Buttons from './Buttons'
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Header = ({ title }) => {
  const onClick = () => {
    //         //  window.location = 'http://localhost:3000/vendor';
    console.log('click');

  }


  //////////////////////////////////////////////////////////////////////
  const DeleteOrder = (props) => {
    OrdersList.filter((order) => order.vendor_id !== props);
    console.log('deleted');
  }
  //////////////////////////////////////////////////////////////////////


  return (
    <header className='header'>
      {/* <Router>
      <div className="vendor-nav">
 
        <Link  to="/items">
        <Buttons color='navy' text='Items' />  
        </Link>
      </div>
    </Router> */}
      <h1> {title}</h1>
      {/* <Buttons color='navy' text='Items' onClick={onClick}/>              */}
    </header>
  )
}
Header.defaultProps = {
  title: 'Order List:'
}
export default Header;


