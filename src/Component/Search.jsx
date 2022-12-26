import React, { useState, useContext } from 'react'
import { collection, query, where, getDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase"
import {AuthContext} from "../context/AuthContext"

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("firstName", "==", userName));

    try{
      const querySnapshot = await getDoc(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }
    catch(err) {
      
      setErr(true);
    }
  }
  const handleKey = e => {
    e.code === "Enter" && handleSearch();
    //console.log(user.firstName);
  }
  const handleSelect = async () => {
    //Providing name to the firestore using the id of the chats
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid :user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db,"chats", combinedId));
      if(!res.exists()) {
        //userChats function
        await updateDoc(doc(db,"userChats", currentUser.uid), {
          [combinedId+"userInfo"]: {
            uid: user.uid,
            displayName: user.firstName,
            photoURL:user.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
        await updateDoc(doc(db,"userChats", user.uid), {
          [combinedId+"userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.firstName,
            photoURL:currentUser.photoURL
          },
          [combinedId+".date"]:serverTimestamp()
        })
      }
    }
    catch {

    }
  } 
  return (
    <div className="search">
      <div className='searchForm'>
        <input type="text" placeholder="Search User" onKeyDown={handleKey} onChange={(e => setUserName(e.target.value))} />
      </div>
      {err && <span>User not found</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="logo"></img>
        <div className="userChatInfo">
          <span>{user.firstName}</span>
          
        </div>
      </div>}

    </div>
  )
}

export default Search