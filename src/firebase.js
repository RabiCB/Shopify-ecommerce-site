
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD4X8CwqvccxWbpauH58J4hL9GLaqRdyaw",
    authDomain: "shopify-e7795.firebaseapp.com",
    projectId: "shopify-e7795",
    storageBucket: "shopify-e7795.appspot.com",
    messagingSenderId: "853959425019",
    appId: "1:853959425019:web:f17fa83eb1d5fa3691e95e"
  };

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app)

 export default app;

