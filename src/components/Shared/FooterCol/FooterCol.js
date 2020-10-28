import React from 'react';
import { Link } from "react-router-dom";


const FooterCol = ({menuTitle,menuItem,children}) => {
    return (
        <div className="col-md-3">
            <h6 style={{color: '#1CC7C1', fontWeight: 'bold'}}>{menuTitle ? menuTitle : ""}</h6>
            <ul className="list-unstyled mt-4">
                {
                    menuItem.map( item => <li style={{marginBottom: '8px'}}><Link style={{textDecoration: 'none', color: '#a4abb3'}} to={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {children && children}
        </div>
    );
};

export default FooterCol;