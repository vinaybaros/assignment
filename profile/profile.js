import React from 'react';

import './profile.css';

const Profile = (props) => {
    
    return(
        <div className="profile">
            <figure>
              <img src={"images/userImage.png"} />  
            </figure>
            <span>Michael Atkisons</span>
            <a href="">My Profile</a>
        </div>
    )
    
}

export default Profile