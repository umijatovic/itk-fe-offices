import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { linksArray } from '../shared/constants';

const Header = () => 
    <header>
        <h1>Offices</h1>
        <nav>
            {linksArray.map((link, i)=> 
                 <NavLink key={i} to={`/${link}`}  activeClassName='selected'><button>{link.charAt(0).toUpperCase() + link.slice(1)}</button> </NavLink>
            )}
        </nav>
    </header>

export default Header;
