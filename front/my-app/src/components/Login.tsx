import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
loginAsync, registerAsync , selectRegistered

} from '../features/login/loginSlice';
import styles from './Counter.module.css';
import { CompletionTriggerKind } from 'typescript';

export function Login() {
  const dispatch = useAppDispatch();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")



 
  return (
    <div>
      Login
      <br></br>
    username: <input onChange={(e)=> setusername(e.target.value)}></input>
    password: <input onChange={(e)=> setpassword(e.target.value)}></input>
    <button onClick={()=> dispatch(loginAsync({username, password}))}>Login</button>

    </div>
  );
}
