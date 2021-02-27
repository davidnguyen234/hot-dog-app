import React from 'react';
import './css/Header.css';
import './css/Map.css';
import Map from './components/Map';
import Header from "./components/Header";
import Carts from "./components/Carts";


function App() {
  return (
    <div className="App" >
    <Header />
    <Map />
    <Carts />
    </div>
  );
}


export default App;

