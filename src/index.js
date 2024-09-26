import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/index.css';
import Login from './view/Login';
import SignUp from './view/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
