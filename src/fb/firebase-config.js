import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDp8WwqArJ62CtAVNWPysVQSiGsxneyzH0',
  authDomain: 'ecommerce-5103a.firebaseapp.com',
  projectId: 'ecommerce-5103a',
  storageBucket: 'ecommerce-5103a.appspot.com',
  messagingSenderId: '829642548524',
  appId: '1:829642548524:web:34a57570930f55ea887889',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
