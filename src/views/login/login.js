import { useState } from 'react';
import { auth } from 'firebase/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Login from 'views/login/login';
import './login.sass';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const login = async() => {
        try {
            const User = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async() => {
        await signOut(auth);
    };

    return ( <
        div className = "login" >
        <
        h1 > Login < /h1> <
        input placeholder = "Email..."
        onChange = {
            (event) => {
                setLoginEmail(event.target.value);
            }
        }
        /> <
        input placeholder = "Password..."
        onChange = {
            (event) => {
                setLoginPassword(event.target.value);
            }
        }
        />

        <
        button onClick = { login } > Login < /button> <
        /div>
    );
}
export default Login;