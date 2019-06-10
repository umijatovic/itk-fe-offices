import React from 'react';
import './officeListItem.scss';
import './officeGridItem.scss';

const OfficeItem = (props) => {

    const {name, description, photo} = props.officeData;

    return(

        <div className={props.className}>

            {(photo) ?  <img src={photo} alt={description}/> : <p className='logoPic'>{name.charAt(0).toUpperCase()} </p>} 
            
            <div>

                <p className='nameP'>{name}</p>
                <p className='descriptionP'>{description} </p>

            </div>
            
        </div>
    )
}

export default OfficeItem;