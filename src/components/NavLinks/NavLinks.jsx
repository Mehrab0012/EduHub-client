import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = ({to, children , className}) => {
    return (
        <div>
            <NavLink to={to} className={className}>{children}</NavLink>
        </div>
    );
};

export default NavLinks;
