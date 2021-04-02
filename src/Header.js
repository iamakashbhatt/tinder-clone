import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
         
          <IconButton>
             <PersonIcon fontSize="large" className="header__icon" />
          </IconButton>

          <img 
              className="header__logo"
              src="https://pbs.twimg.com/profile_images/1311766254873710592/qOapH6Tl_400x400.jpg"
              alt="tinder"
          />
           <IconButton>
               <ForumIcon fontSize="large" className="header__icon"/>
           </IconButton>
        
        </div>
    )
}

export default Header
