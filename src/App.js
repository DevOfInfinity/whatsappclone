import React, { useState, useEffect } from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem';


import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default () => {

  const [chatlist, setChatlist] = useState([{}, {}, {}, {}])

  return (
    <div className='app-window' >

      <div className='sidebar'>

        <header>
          <img className='header-avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt='' />
          <div className='header-buttons'>
            <div className='header-btn'>
              <DonutLargeIcon />
            </div>
            <div className='header-btn'>
              <ChatIcon />
            </div>
            <div className='header-btn'>
              <MoreVertIcon />
            </div>
          </div>

        </header>

        <div className='search'>
          <div className='search-input'>
            <SearchIcon />
            <input type='search' placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className='chatlist'>
          {chatlist.map((items, key) => (
            <ChatListItem
              key={key}
            />
          ))}
        </div>


      </div>

      <div className='contentarea'>
        ...
      </div>
    </div>
  );
}