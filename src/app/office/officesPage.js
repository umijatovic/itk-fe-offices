import React from 'react';
import './officesPage.scss'
import OfficeItem from './officeItem';

const OfficesPage = ({officesData, isListView}) =>{
    const officesDivClass = isListView ? 'officesDiv' : 'officesDivGrid';
    const officeItemClass = isListView ? 'officeListItem' : 'officeGridItem';
    
        return(
            <div className={officesDivClass}>
                    {officesData.map((office, i) => <OfficeItem className={officeItemClass} key={i} officeData={office}/>)} 
            </div>
        )
}

export default OfficesPage;
