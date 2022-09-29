import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Home, NotFound } from './pages'

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
