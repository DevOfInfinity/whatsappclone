import React, { useState } from "react";
import './NewChat.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default () => {

    const [list, setList] = useState([
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'João Nascimento' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'João Nascimento' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'João Nascimento' },
        { id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'João Nascimento' }
    ])

    return (
        <div div className="newChat" >
            <div className="newChat-head">
                <div className="newChat-backbutton">
                    <ArrowBackIcon style={{ color: '#FFFFFF' }} />
                </div>
                <div className="newChat-headtitle">Nova conversa
                </div>
            </div>
            <div className="newChat-list">
                {list.map((item, key) => (
                    <div className="newChat-item" key={key}>
                        <img className="newChat-itemavatar" src={item.avatar} />
                        <div className="newChat-itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}