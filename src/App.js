import React, { useState } from 'react';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import chatData from './chatData'; // Importar dados de exemplo de um arquivo separado
import './App.css';

export default () => {
  const [chatlist, setChatlist] = useState(chatData);
  const [activeChat, setActiveChat] = useState({});

  const handleChatItemClick = (chat) => {
    if (activeChat.chatId !== chat.chatId) {
      setActiveChat(chat);
    }
  };

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon />
            </div>
            <div className="header-btn">
              <ChatIcon />
            </div>
            <div className="header-btn">
              <MoreVertIcon />
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
          <ChatWindow />
        ) : (
          <ChatIntro />
        )}
      </div>
    </div>
  );
};
