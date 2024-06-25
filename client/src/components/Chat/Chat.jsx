import React from 'react'
import { useState } from 'react'
import './Chat.scss'

const Chat = () => {

    const [chat, setChat] =useState(true)

  return (
    <div className='Chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor sit...</p>

        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor sit...</p>

        </div>
        <div className="message">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor sit...</p>

        </div>
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
