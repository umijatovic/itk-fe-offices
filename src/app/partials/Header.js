import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { link } from 'fs';

const Header = (props) => {

    const { handleClick, handleClick1, handleClick2 } = props;
        const buttonClass = (props.isListView) ? 'selected' : '';
        const buttonClass1 = (props.isListView) ? '' : 'selected';
        const buttonClass2 = (props.isListView === 'map') ? 'selected' : '';

        return(

            
            <header>

                <h1>Offices</h1>

                <nav>
arrayOfLinks.map(link => <Link to={link.path})
                    <Link to='/'><button className={buttonClass} onClick={handleClick}>List</button></Link>
                    <Link to='/'><button className={buttonClass1} onClick={handleClick1}>Grid</button></Link>
                    <Link to='/map'><button>Map</button></Link>

                </nav>
                
            </header>
        )
    
}

export default Header;