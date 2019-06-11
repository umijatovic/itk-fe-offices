import React from 'react';
import './officeListItem.scss';
import './officeGridItem.scss';

const OfficeItem = ({officeData:{name, description, photo}, className}) => 
    <div className={className}>
        {(photo) ?  <img src={photo} alt={description}/> : <p className='logoPic'>{name.charAt(0).toUpperCase()} </p>} 
        <div>
            <p className='nameP'>{name}</p>
            <p className='descriptionP'>{description} </p>
        </div>
    </div>

export default OfficeItem;
