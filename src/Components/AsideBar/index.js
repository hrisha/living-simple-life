import React from 'react'
import AsideWidget from '../AsideWidget'
import AsideWidgetItem from '../AsideWidgetItem'
import '../../App.css';
const AsideBar = () => {
  return (
    <aside className="sidebar">
      <AsideWidget/>
      <AsideWidgetItem/>
    </aside>
  )
}

export default AsideBar
