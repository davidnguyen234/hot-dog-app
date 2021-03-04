import React, { useState } from "react";
//import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as cartLocation from "../data/cart-locations.json"



function Map() {
  const [selectedCart, setSelectedCart] = useState(null);


  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 47.606209, lng: -122.332069 }}
    >
      {cartLocation.locations.map(cart => (
        <Marker
          key={cart.properties.cart_id}
          position={{
            lat: cart.properties.coordinates[1],
            lng: cart.properties.coordinates[0]
          }}
          onClick={() => {
            setSelectedCart(cart);
          }}
          icon={{
            url: "/hot-dog-cart.svg",
            scaledSize: new window.google.maps.Size(30, 30)
          }}
        />
      ))}

      {selectedCart && (
        <InfoWindow
          position={{
            lat: selectedCart.properties.coordinates[1],
            lng: selectedCart.properties.coordinates[0]
          }}
          onCloseClick={() => {
            setSelectedCart(null);
          }}>
          <div id="info">
            <h4>{selectedCart.properties.name}</h4>
            <p>{selectedCart.properties.phone}</p>
            <p>{selectedCart.properties.address}</p>
            <button>Menu</button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

