import React from 'react';
import MarkerComponent from './Marker';
import { Map as LeafletMap, TileLayer} from 'react-leaflet';
import { mapProps, mapUrl } from '../shared/constants';

const MapPage = ({officesData}) => 
    <LeafletMap { ...mapProps }>
        <TileLayer url={mapUrl}/>
        {officesData.map((office, i)=> <MarkerComponent office={office} key={i}/> )}
    </LeafletMap>

export default MapPage;
