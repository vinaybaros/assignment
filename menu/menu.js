import React from 'react';

import './menu.css';

const Menu = (props) => {
    
    return(
        <div className="nav">
            <h4>menu</h4>
            <ul>
                <li className="navInbox"><a href="">inbox</a></li>
                <li className="navSent"><a href="">sent</a></li>
                <li className="navDrafts"><a href="">drafts</a></li>
                <li className="navDeleted"><a href="">deleted</a></li>
                <li className="navFavourite"><a href="">favourite</a></li>
                <li className="navAnalytics"><a href="">analytics</a></li>
                <li className="navSettings"><a href="">settings</a></li>
            </ul>
            <span className="btn btnBlue">Upgrade Plan</span>
            <span className="btn btnNormal">Contact Support</span>   
        
        </div>
    )
    
}

export default Menu