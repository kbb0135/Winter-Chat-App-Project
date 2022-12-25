import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../Component/firebase";

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const[currentUser, setCurrentUser] = useState({})
    //if the user exists within the the firebase will manage the user and the state is set for the user
    const unsub=useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            console.log(user);
        })
        return ()=> {
            unsub();
        }
    },[]);
    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
    
}; 