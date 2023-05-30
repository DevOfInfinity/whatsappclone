import React, { useState } from "react";
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

    let recognition = null
    let SpeechRecognition = window.SpeechRecohnition || window.webkitSpeechRecognition
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)

    const handleEmojiClick = (e) => {
        setText(text + e.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleSendClick = () => {

    }

    const handleMicClick = () => {
        if (recognition !== null) {

            recognition.onend = () => {
                setListening(true)
            }
            recognition.onstart = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }

            recognition.start()

        }
    }


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

            <div className="chatWindow-emojiarea"
                style={{ height: emojiOpen ? '200px' : '0px' }}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    searchDisabled
                    SkinTonerPickerdisable
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow-pre">

                    <div
                        className="chatWindow-btn"
                        onClick={handleCloseEmoji}
                        style={{ width: emojiOpen ? 40 : 0 }}
                    >
                        <CloseRoundedIcon style={{ color: '#919191' }} />
                    </div>
                    <div
                        className="chatWindow-btn"
                        onClick={handleOpenEmoji}
                    >
                        <MoodRoundedIcon style={{ color: emojiOpen ? '#009688' : '#919191' }} />
                    </div>
                </div>

                <div className="chatWindow-inputarea">
                    <input
                        className="chatWindow-input"
                        type='text'
                        placeholder="Digite uma mensagem"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>

                <div className="chatWindow-pos">

                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow-btn">
                            <MicRoundedIcon style={{ color: listening ? '#126ECE' : '#919191' }} />

                        </div>
                    }

                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow-btn">
                            <SendRoundedIcon style={{ color: '#919191' }} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}