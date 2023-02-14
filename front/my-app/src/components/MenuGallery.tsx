import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import { useAppSelector } from '../app/hooks';
import { selectUsername } from '../features/login/loginSlice';



export function MenuGallery() {
  const username = useAppSelector(selectUsername);


  return (
    <div>
      <br></br>
    

      {/* {updid} */}
      <h1><center>Welcome to {username}'s gallery</center></h1>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/gallery/family">Family Album</Link> {" "}
        <Link to="/gallery/friends">Freinds Album </Link> {" "}
        <Link to="/gallery/trips">Trips Album </Link> {" "}
        <Link to="/gallery/general">General Gallery </Link> {" "}

      </nav>
      <Outlet></Outlet>
      <br />
    </div>
  );
}
