import React, { useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  loginAsync, selectLooged, logout, selectAccess, selectUsername
} from './features/login/loginSlice';
import './style.css'
import { Outlet, Link } from "react-router-dom";
import Profile from './components/Profile';

function App() {
  const dispatch = useAppDispatch()
  const logged = useAppSelector(selectLooged)
  const username = useAppSelector(selectUsername)



  //   function refreshPage() {
  //     window.location.reload();
  //   }


  return (

    <div>
      {logged ?
        <nav className='topNav'>
          <ul className='topNav'>
            <li className='topNav'><Link className="active" to={'/'}>Home</Link></li>
            <li className='topNav'><Link to={'gallery'}>My gallery</Link></li>
            <li className='topNav'><Link to={'profile'}>My profile</Link></li>
            <li className='topNav' style={{ float: "right" }}><Link to={'profile'}>Welcome {username}</Link></li>
            <li className='topNav' style={{ float: "right" }}><Link to={'/'} onClick={() => { dispatch(logout()); }}>Log out</Link></li>
          </ul>
        </nav> :
        <nav className='topNav'>
          <ul className='topNav'>
            <li className='topNav'><Link className="active" to={'/'}>Home</Link></li>
            <li className='topNav' style={{ float: "right" }}><Link to={'register'}>Register</Link></li>
            <li className='topNav' style={{ float: "right" }}><Link to={'login'}>Log in</Link></li>
          </ul><br /><br /><br /><br />
        </nav>}
      <Outlet />
      <footer className="footer">
        <div className="container">
          <p>Copyright &copy; {new Date().getFullYear()} My React App</p>
          <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>Contact us</Link>
          <p>
            Made with the help of Chavi shiffer by OpenAI
          </p>
        </div>
      </footer>
    </div>
  );
}





export default App;

