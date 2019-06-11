import React from 'react';
import './Marker.scss';
import { Marker, Popup } from 'react-leaflet';

const MarkerComponent = ({office: {latitude, longitude, photo, name, description}}) =>
    <Marker position={[latitude, longitude]}>
        <Popup>
            {(photo) ? <img src={photo} alt=""/> : <p className='logoPic'>{name.charAt(0).toUpperCase()}</p>}
            <h4>{name}</h4>
            <p className='descriptionP'>{description}</p>
        </Popup>
    </Marker>

export default MarkerComponent;


