import React from 'react'

const AsideWidgetItem = () => {
  return (
    <div className='sidebar-widget'>
          <h2 className="widget-title">RECENT POSTS</h2>
          <div className="widget-recent-post">
            <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
            <img src="./food.jpg" alt="" className="widget-image" />
          </div>
          <div className="widget-recent-post">
            <h3 className="widget-recent-post-title">Simplicity and work</h3>
            <img src="./work.jpg" alt="" className="widget-image" />
          </div>
          <div className="widget-recent-post">
            <h3 className="widget-recent-post-title">Simple decorations</h3>
            <img src="./deco.jpg" alt="" className="widget-image" />
          </div>
    </div>
  )
}

export default AsideWidgetItem
