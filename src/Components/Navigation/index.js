import React from 'react'
import NavItem from '../NavItem';
const navItems = [1,2,3];

const Navigation = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavItem className= "current-page" link="index.html" text="Home"/>
                <NavItem link="about-me.html" text="About me"/>
                <NavItem link="recent-post.html" text="Recent posts"/>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation
