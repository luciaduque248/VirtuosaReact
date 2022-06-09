import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';

import Inicio from './pages/Inicio';
import Maquillaje from './pages/Maquillaje';
import Moda from './pages/Moda';
import Tips from './pages/Tips';
import Experiencias from './pages/Experiencias';
import Error404 from './pages/Error404';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

import Vestidos from './pages/ropa/VestidosRS';
import Descuentos from './pages/ropa/DescuentosRS';
import Diseña from './pages/ropa/DiseñaRS';
import Tendencias from './pages/ropa/TendenciasRS';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/VirtuosaReact' element={<Inicio />} ></Route>
      <Route path='/VirtuosaReact/maquillaje' element={<Maquillaje />}></Route>
      <Route path='/VirtuosaReact/moda' element={<Moda />}></Route>
      <Route path='/VirtuosaReact/tips' element={<Tips />}></Route>
      <Route path='/VirtuosaReact/experiencias' element={<Experiencias />}></Route>
      <Route path='/VirtuosaReact/nosotros' element={<Nosotros />}></Route>
      <Route path='/VirtuosaReact/contacto' element={<Contacto />}></Route>

      <Route path='/VirtuosaReact/moda-vestidos' element={<Vestidos />}></Route>
      <Route path='/VirtuosaReact/moda-descuentos' element={<Descuentos />}></Route>
      <Route path='/VirtuosaReact/moda-diseña' element={<Diseña />}></Route>
      <Route path='/VirtuosaReact/moda-tendencias' element={<Tendencias />}></Route>

      <Route path='*' element={<Error404 />}></Route>

      <Route path='/VirtuosaReact/home' element={<Navigate replace to={"/VirtuosaReact/"} />}></Route>

    </Routes>
  </BrowserRouter>

);

