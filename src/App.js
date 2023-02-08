import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import './styles/banner.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/detail/:id' element={<Detail/>} /> */}
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='*' component={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
