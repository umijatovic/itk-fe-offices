import React from 'react';
import './officesPage.scss'
import OfficeItem from './officeItem';

const OfficesPage = (props) =>{
    
    const officesDivClass = props.isListView ? 'officesDiv' : 'officesDivGrid';
    const officeItemClass = props.isListView ? 'officeListItem' : 'officeGridItem';
    
        return(

            <div className={officesDivClass}>

                
                        {props.officesData.map((office, i) =>
                            {return <OfficeItem className={officeItemClass} key={i} officeData={office}/>})} 
                        
            </div>

        )
    
}

export default OfficesPage;