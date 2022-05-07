import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from "react";


const containerStyle = {
    position: 'relative',  
    width: '300px',
    height: '300px',
    // left: '0',
    // right: '0',
    display: 'block',
    marginLeft: 'auto',
    marginRight: "auto",
    // position: "absolute",
    // width: "40%",
  }
 
export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map
        class="map"
        google={this.props.google}
        initialCenter={{
          lat: 45.58582,
          lng: -122.77288
        }}
        style={containerStyle}
        zoom={15}
        onClick={this.onMapClicked}
      >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      )
    }
  }
 
export default GoogleApiWrapper({
  apiKey: (process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY)
})(MapContainer)