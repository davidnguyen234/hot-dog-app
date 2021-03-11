import React, {Component} from 'react';
import {InfoWindow, Marker, Map, GoogleApiWrapper} from 'google-maps-react';

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
        .then(data => this.setState({cartLocations: data}))
  };



  renderCarts() {
    return this.state.cartLocations.map((cartLocations, i) => {
        return <Marker
            key={i}
            onClick={this.cartClick}
            id={cartLocations.address_id}
            position={{
              lat: cartLocations.address_latitude, 
              lng: cartLocations.address_longitude
            }}
             vendor_id={cartLocations.vendor_id}
            // cart_phone={cartLocations.cart_phone}
            // cart_address={cartLocations.cart_address}
            //icon={icon}
            />
      })
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
              <h3>{this.state.selectedCart.vendor_id}</h3>
              {/* <p>{this.state.selectedCart.cart_phone}</p>
              <p>{this.state.selectedCart.cart_address}</p> */}
              <button>Menu</button>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer)
