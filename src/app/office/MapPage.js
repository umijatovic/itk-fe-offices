import React from 'react';
import MarkerComponent from './Marker';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapPage = (props) => {
    
    return (

        <LeafletMap
          center={[50, 10]}
          zoom={1.5}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >

        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
        {props.officesData.map((office, i)=>{

            return <MarkerComponent office={office} key={i}/>
                    
        })}
        
      </LeafletMap>
    );
  }


export default MapPage;