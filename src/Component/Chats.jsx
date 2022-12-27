import React, { useState, useEffect, useContext } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import { db } from "./firebase"

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        console.log("CurrentData: ", doc.data());
        setChats(doc.data());
      });
      return () => {
        unsub();
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect =(u) => {
    dispatch({type: "CHANGE_USER", payload: u});
  }
  console.log(chats);
  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat)=>(

        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL}></img>
        <div className="userChatInfo">
          <span className="chats">{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Chats