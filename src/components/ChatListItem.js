import React from "react";
import './ChatListItem.css'

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListitem-avatar" src="https://www.w3schools.com/howto/img_avatar.png" />
            <div className="chatListitem-lines">
                <div className="chatListitem-line">
                    <div className="chatListitem-name">""</div>
                    <div className="chatListitem-date">"15:40"</div>
                </div>
                <div className="chatListitem-line">
                    <div className="chatListitem-lastMsg">
                        <p>Hello, my friend!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}