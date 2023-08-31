// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PcLayout from './layouts/PcLayout';
import Cocktail from './pages/page-cocktail/Cocktail';
import Food from './pages/page-food/Food';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PcLayout />}>
          <Route path="/menu/cocktail" element={<Cocktail/>}/>
          <Route path="/menu/food" element={<Food/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
