import { initializeApp } from "firebase/app";
import { } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBOFX1JnNxe7Zor8FsxOtwDZIepIS29-88",
    authDomain: "reactlogin-4aaf0.firebaseapp.com",
    projectId: "reactlogin-4aaf0",
    storageBucket: "reactlogin-4aaf0.appspot.com",
    messagingSenderId: "940461086103",
    appId: "1:940461086103:web:fc12cf292d3ecf3628e0d2",
    measurementId: "G-11N1BKMF6S"
};


export const auth = app.auth();
export default app = initializeApp(firebaseConfig);
