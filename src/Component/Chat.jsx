import React,{useContext} from 'react'
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
      <span className="userName">{data.user?.displayName}</span>
      <div className="chatIcons">
        <img src="https://www.svgrepo.com/show/311424/video.svg" alt="img" />
        <img src="https://www.svgrepo.com/show/64208/phone.svg" alt="img" />
        <img src="https://www.svgrepo.com/show/53800/more.svg" alt="img" />
        
        </div>
        
      </div>
      <Messages/>
      <Input />
    </div>

  )
}

export default Chat