import React from 'react'

function Message() {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src= "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <span>Just Now</span>
         </div>
        <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
    </div>
    </div>
  )
}

export default Message