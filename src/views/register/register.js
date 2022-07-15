// import { onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from 'firebase/firebase-config';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { registerUser } from 'services/user';
import './register.sass';

function Register() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerComfirmPassword, setRegisterComfirmPassword] = ('');
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState('');
  const [RegisterFullName, setRegisterFullName] = useState('');

  const [user, setUser] = useState({});

  //     onAuthStateChanged(auth, (currentUser) => {
  //         setUser(currentUser);
  //     });
  //     const register = async() => {
  //         try {
  //             const User = await createUserWithEmailAndPassword(
  //                 auth,
  //                 registerEmail,
  //                 registerPassword,
  //                 registerComfirmPassword,
  //                 registerPhoneNumber,
  //                 RegisterFullName,
  //             );
  //             console.log(user);
  //         } catch (error) {
  //             console.log(error.message);
  //         }
  //     };
  // }
  // const logout = async() => {
  //     await signOut(auth);
  // };

  const handleRegister = async () => {
    await registerUser({
      username: RegisterFullName,
      email: registerEmail,
      password: registerPassword,
      phoneNumber: registerPhoneNumber,
    });
  };

  return (
    <div className="register_container">
      <h1> Register </h1>
      <input
        placeholder="Email..."
        onChange={(event) => setRegisterEmail(event.target.value)}
      />
      <input
        placeholder="Password..."
        onChange={(event) => setRegisterPassword(event.target.value)}
      />

      <input
        placeholder="ComfirmPassword..."
        onChange={(event) => setRegisterComfirmPassword(event.target.value)}
      />
      <input
        placeholder="PhoneNuber..."
        onChange={(event) => setRegisterPhoneNumber(event.target.value)}
      />

      <input
        placeholder="FullName..."
        onChange={(event) => setRegisterFullName(event.target.value)}
      />

      <button onClick={handleRegister}>
        <FormattedMessage id="register.button.register" />
      </button>
    </div>
  );
}

export default Register;
