import React from 'react'
import Article from '../Article'

const LeftSide = () => {
  return (
    <main role="main">
        <Article className='article-featured'/>
        <Article className='article-featured'/>
        <Article className='article-featured'/>
        <Article className='article-featured'/>
      {
        [1,2,3,4].forEach(() => 
            <Article className='article-featured'/>
        )
      }
    </main>
  )
}

export default LeftSide
