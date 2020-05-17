import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    selectedPlace;
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={() => this.setLocation(this.state.selectedPlace.name)}
                        name={'Current location'} />

                <InfoWindow>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAHi3D9HS4z3mKW0m3xcOSYtkqncjQVHgM')
})(MapContainer)



