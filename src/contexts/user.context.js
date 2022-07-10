import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

 export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
 })
 export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const value ={currentUser,setCurrentUser}

    useEffect(()=>{
      const unsbscribe= onAuthStateChangedListner(user=>{
         setCurrentUser(user)
         //console.log(user)
      })
      return unsbscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
 }