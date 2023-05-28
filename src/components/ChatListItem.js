import React from "react";
import './ChatListItem.css'

export default ({ onClick, active, data }) => {
    return (
        <div
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListitem-avatar" src={data.image} alt="" />
            <div className="chatListitem-lines">
                <div className="chatListitem-line">
                    <div className="chatListitem-name">{data.title}</div>
                    <div className="chatListitem-date">"15:40"</div>
                </div>
                <div className="chatListitem-line">
                    <div className="chatListitem-lastMsg">
                        <p>Hello, my friend! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}