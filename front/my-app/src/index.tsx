import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './components/Login';
import Profile from './components/Profile';
import { Register } from './components/Register';
import Contact from './components/Contact';
import FamilyAlbum from './components/FamilyAlbum';
import FreindsAlbum from './components/FreindsAlbum';
import TripsAlbums from './components/TripsAlbums';
import GeneralGallery from './components/GeneralGallery';
import { MenuGallery } from './components/MenuGallery';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="gallery" element={<MenuGallery />}>
            <Route path="general" element={<GeneralGallery />} />
              <Route path="family" element={<FamilyAlbum />} />
              <Route path="friends" element={<FreindsAlbum />} />
              <Route path="trips" element={<TripsAlbums />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />



          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

