import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Header } from './Layout'
import { Home, About, Albums, NotFound } from './pages'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="About" element={<About />} /> 
        <Route path="/Albums" element={<Albums />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
