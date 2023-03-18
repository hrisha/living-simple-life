import React from 'react'
import Navigation from '../Navigation'
import SiteTitle from '../SiteTitle'
const Header = () => {
  return (
    <header>
        <div className='container container-flex'>
            <SiteTitle />
            <Navigation />
        </div>
    </header>
    
  )
}

export default Header
