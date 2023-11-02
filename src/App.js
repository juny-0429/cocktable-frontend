import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PcLayout from './layouts/PcLayout';
import Cocktail from './pages/page-cocktail/Cocktail';
import CocktailDetail from './pages/page-cocktail/cocktail-detail/CockDetail';
import Food from './pages/page-food/Food';
import Drink from './pages/page-drink/Drink';
import Wine from './pages/page-wine/Wine';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PcLayout />}>
          <Route path="/menu/cocktail" element={<Cocktail/>}/>
          <Route path='/menu/cocktail/detail' element={<CocktailDetail/>}/>

          <Route path="/menu/food" element={<Food/>}/>
          <Route path="/menu/drink" element={<Drink/>}/>
          <Route path="/menu/wine" element={<Wine/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
