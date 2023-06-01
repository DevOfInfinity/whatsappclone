import React, { useState } from 'react';
import './App.css';


import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Login from './components/Login';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

export default () => {
  const [chatlist, setChatlist] = useState([
    { chatId: 1, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 2, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 3, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 4, title: 'Fulano de Tal', image: 'https://www.w3schools.com/howto/img_avatar.png' }
  ]);


  const handleChatItemClick = (chat) => {
    if (activeChat.chatId !== chat.chatId) {
      setActiveChat(chat);
    }
  };

  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser)

  }

  if (user === null) {
    return (<Login onReceive={handleLoginData} />)
  }

  return (
    <div className="app-window">
      <div className="sidebar">

        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <header>
          <img className="header-avatar" src={user.avatar} alt="" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div onClick={handleNewChat} className="header-btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === item.chatId} // Usar item.chatId em vez de chatlist[key].chatId
              onClick={() => handleChatItemClick(item)} // Usar item em vez de chatlist[key]
            />
          ))}
        </div>
      </div>

      <div className="contentarea">
        {activeChat.chatId !== undefined ? (
          <ChatWindow
            user={user}
          />
        ) : (
          <ChatIntro />
        )}
      </div>
    </div>
  );
};
