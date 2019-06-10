import React from 'react';
import './Marker.scss';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


const MarkerComponent = (props) => {
    const office = props.office;
    return(
        <Marker  position={[office.latitude, office.longitude]}>
            <Popup>
                {(office.photo) ? <img src={office.photo} alt=""/> : <p className='logoPic'>{office.name.charAt(0).toUpperCase()} </p>}
                <h4>{office.name} </h4>
                <p className='descriptionP'>{office.description}</p>
            </Popup>
        </Marker>
    )
}

export default MarkerComponent;


