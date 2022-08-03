import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg-aW4a3khpB0lecS1IttGXQSn4L1M0nc",
  authDomain: "koa-react-auth.firebaseapp.com",
  projectId: "koa-react-auth",
  storageBucket: "koa-react-auth.appspot.com",
  messagingSenderId: "828950728206",
  appId: "1:828950728206:web:8abb98dbadba67e50eb65f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
