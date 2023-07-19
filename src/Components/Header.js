import React from 'react'
import "./Header.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header() {
  return (
    <div className="header_box">
        <div className="header_left_side">
            <h1>Where in the World!</h1>
        </div>
        <div className="header_right_side">
          <span className="line"><DarkModeIcon/><h2>Dark Mode</h2></span>
        </div>
    </div>
  )
}

export default Header