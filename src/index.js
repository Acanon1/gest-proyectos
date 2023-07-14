import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CrearCuenta from './acelera/CrearCuenta';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EditarPerfil from './acelera/EditarPerfil';
import ExamenEntrada from './acelera/ExamenEntrada';
import ModuloCursos from './acelera/ModuloCursos';
import Footer from './acelera/Components/Footer';
import SearchBar from './acelera/Components/SearchBar';
import Principal from './acelera/Principal';
import IniciarSesion from './acelera/IniciarSesion';
import Notas from './acelera/Notas';
import Insignias from './acelera/Insignias';
import ModuloNivel from './acelera/ModuloNivel';
import ExamenUnidad from './acelera/ExamenUnidad';
import Problemas from './acelera/Problemas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/principal' element={<Principal/>} />
        <Route path='/bar' element={<SearchBar/>} />
        <Route path='/pie' element={<Footer/>} />
        <Route path='/crear' element={<CrearCuenta/>} />
        <Route path='/editar' element={<EditarPerfil/>} />
        <Route path='/examen' element={<ExamenEntrada/>} />
        <Route path='/cursos' element={<ModuloCursos/>} />
        <Route path='/Nivel' element={<ModuloNivel/>} />
        <Route path='/iniciar' element={<IniciarSesion/>} />
        <Route path='/notas' element={<Notas/>} />
        <Route path='/insignias' element={<Insignias/>} />
        <Route path='/unidad' element={<ExamenUnidad/>} />
        <Route path='/problemas' element={<Problemas/>} />




      

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
