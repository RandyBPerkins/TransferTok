import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Callback from './pages/Callback';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='/callback' element={<Callback />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
