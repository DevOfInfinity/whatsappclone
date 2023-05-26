import React from 'react'
import './App.css'

export default () => {
  return (
    <div className='app-window'>

      <div className='sidebar'>

        <header>
          <img className='header-avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
          <div className='header-button'>
            ...
          </div>

        </header>

        <div className='search'>
          ...
        </div>

        <div className='chatlist'>
          ...
        </div>


      </div>

      <div className='contentarea'>
        ...
      </div>
    </div>
  );
}

