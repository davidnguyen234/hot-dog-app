import React, { Component } from 'react';
import './App.css';

//MENU IMPORTS
import Menu from './components/Menu';
import Button from './components/Button';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { apiResponse: 'THIS FRONTEND CRAP WORKS' }
  }

  callAPI() {
    fetch("http://localhost:9000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App" >
        <Menu>
          <Button />
        </Menu>
      </div>
    );
  }
}

export default App;
