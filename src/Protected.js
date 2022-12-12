import React, {useEffect,useState } from 'react'
import Cart from './Cart'
import app from './firebase'
import Login from './Login'
import { onAuthStateChanged,getAuth } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

const Protected = () => {
    const [currentUser,setCurrentuser]=useState("")
    const auth=getAuth(app)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            setCurrentuser(user)
            Navigate("/cart")
          }
          else{
            Navigate("/login")
            
          }
        })
      },[])
}

export default Protected