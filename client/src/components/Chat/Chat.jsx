import React, { useContext } from 'react'
import { useState } from 'react'
import './Chat.scss'
import { AuthContext } from '../../context/AuthContext'

const Chat = ({chats}) => {

    const [chat, setChat] =useState(false)
    const {currentUser} = useContext(AuthContext)

  return (
    <div className='Chat'>
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      
      {chat && (<div className="chatBox">
        <div className="top">
           <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            John
            </div> 
            <div className="close" onClick={()=>setChat(null)}>X</div>
        </div>
        <div className="center">
            <div className="chatMessage">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
            <div className="chatMessage">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
            <div className="chatMessage own">
                <p>Lorem ipsum dolor oyi itugd</p>
                <span>1 hour ago</span> 
            </div>
        </div>
        <div className="bottom">
            <textarea placeholder='Type a message'></textarea>
            <button>Send</button>
        </div>
      </div>)}
    </div>
  )
}

export default Chat
