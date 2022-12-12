import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { createContext, useContext, useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const AuthContext=createContext();
export function UserAuth(){
    return useContext(AuthContext);
}
export const AuthProvider=({children})=>{
const [currentUser,setCurrentUser]=useState()
const provider=new GoogleAuthProvider();
const navigate=useNavigate();
function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

function logout(){
    return signOut(auth)
    
}
function passwordreset(email){
    return sendPasswordResetEmail(auth,email)
}
function googlehandler(){
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    navigate("/")
    console.log(user)
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
useEffect(()=>{
    const unsucribe=onAuthStateChanged(auth,(user)=>{
        console.log(user)
        setCurrentUser(user)
    })
    return ()=>{
        unsucribe()
    }
})


return(
    <AuthContext.Provider value={{signup,login,logout,passwordreset,currentUser,googlehandler}}>
        {children}
    </AuthContext.Provider>
)
}