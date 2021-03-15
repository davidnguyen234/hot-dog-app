import React from 'react';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1> {title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Order List:'
}
export default Header;