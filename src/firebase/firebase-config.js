import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAnDkHkmxgmrK-tluiuTBm48cNvf4UVAO',
    authDomain: 'fir-react-auth-9de0d.firebaseapp.com',
    projectId: 'fir-react-auth-9de0d',
    storageBucket: 'fir-react-auth-9de0d.appspot.com',
    messagingSenderId: '946458358311',
    appId: '1:946458358311:web:11e757bfad05d74f9ad402',
    measurementId: 'G-4D00KRVKFH',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);