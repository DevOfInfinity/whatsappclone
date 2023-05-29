import React from "react";
import EmojiPicker from "emoji-picker-react";
import './ChatWindow.css'

import SearchIcon from '@mui/icons-material/Search';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MicRoundedIcon from '@mui/icons-material/MicRounded';




export default () => {

    // const handleEmojiClick = () {

    // }

    return (
        <div className="chatWindow">
            <div className="chatWindow-header">

                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://www.w3schools.com/howto/img_avatar.png" alt='' />
                    <div className="chatWindow-name">João</div>
                </div>

                <div className="chatWindow-headerbuttons">
                    <div className="chatWindow-btn">
                        <SearchIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <AttachFileRoundedIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoreVertRoundedIcon style={{ color: '#919191' }} />
                    </div>
                </div>

            </div>
            <div className="chatWindow-body">

            </div>

            <div className="chatWindow-emojiarea">
                <EmojiPicker
                    // onEmojiClick={handleEmojiClick}
                    searchDisabled
                    SkinTonerPickerdisable
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">
                    <div className="chatWindow-btn">
                        <CloseRoundedIcon style={{ color: '#919191' }} />
                    </div>
                    <div className="chatWindow-btn">
                        <MoodRoundedIcon style={{ color: '#919191' }} />
                    </div>
                </div>

                <div className="chatWindow-inputarea">
                    <input
                        className="chatWindow-input"
                        type='text'
                        placeholder="Digite uma mensagem"
                    />
                </div>

                <div className="chatWindow-pos">
                    <div className="chatWindow-btn">
                        <SendRoundedIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}