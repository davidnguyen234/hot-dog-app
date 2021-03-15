import React, { Component } from 'react';
import { InfoWindow, Marker, Map, GoogleApiWrapper } from 'google-maps-react';

// const icon = {

// }

const style = {
  width: '100%',
  height: '100%'
}


export class MapContainer extends Component {

  state = {
    showInfoWindow: false,
    activeCart: {},
    selectedCart: {},
    cartLocations: [],
    vendorDetail: []

  };


  componentDidMount() {
    fetch('http://localhost:9000/carts')
      .then(response => response.json())
      .then(data => this.setState({ cartLocations: data }))
  };



  renderCarts() {
    return this.state.cartLocations.map((cartLocations, i) => {
      // Only loads the carts that are available into the list
      let availableCarts;
      if (this.state.cartLocations[i].vendor_avail === 1) {
        availableCarts =
          <Marker
            key={i}
            onClick={this.cartClick}
            id={cartLocations.address_id}
            position={{
              lat: cartLocations.address_latitude,
              lng: cartLocations.address_longitude
            }}
            vendor_id={cartLocations.vendor_id}
            vendor_hours={cartLocations.vendor_hours}
            vendor_phone={cartLocations.vendor_phone}
            address_cross_street={cartLocations.address_cross_street}
            address_city={cartLocations.address_city}
            address_state={cartLocations.address_state}
            address_zip={cartLocations.address_zip}
          //icon={icon}
          />
      }
      return (
        availableCarts
      )
  });
};

cartClick = (props, marker) =>
  this.setState({
    selectedCart: props,
    activeCart: marker,
    showInfoWindow: true
  });

mapClick = () => {
  if (this.state.showInfoWindow) {
    this.setState({
      showInfoWindow: false,
      activeCart: null
    })
  }
};

render() {
  return (
    <Map google={this.props.google}
      style={style}
      center={{
        lat: 47.606209,
        lng: -122.332069
      }}
      zoom={11}
      onClick={this.mapClick}
    >

      {this.renderCarts()}

      <InfoWindow
        marker={this.state.activeCart}
        visible={this.state.showInfoWindow}
        onClose={this.onInfoWindowClose}
      >
        <div id="info">
          <h3> Cart {this.state.selectedCart.vendor_id}</h3> <br></br>
          <p>{this.state.selectedCart.vendor_hours}</p>
          <p>{this.state.selectedCart.vendor_phone}</p> <br></br>
          <p>{this.state.selectedCart.address_cross_street}</p>
          <p>{this.state.selectedCart.address_city}, {this.state.selectedCart.address_state} {this.state.selectedCart.address_zip}</p> <br></br>
          <div id="menu-button"><button>Menu</button></div>
        </div>
      </InfoWindow>
    </Map>
  );
}
}


export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)
