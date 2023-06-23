import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [err, setErr] = useState(false);
  const [name, setName] = useState();
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      await setDoc(doc(db, "users", user.user.uid), {
        name,
        registerEmail
      });
      await setDoc(doc(db, "userChats", user.user.uid), {});
      navigate("/")
    } catch (error) {
      setErr(true);
      // console.log(error.message);
      // console.log(error.code);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="title">Register</div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="display name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <button onClick={register}>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
