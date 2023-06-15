import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CrearCuenta from './acelera/CrearCuenta';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './acelera/Principal';
import EditarPerfil from './acelera/EditarPerfil';
import ExamenEntrada from './acelera/ExamenEntrada';
import ModuloCursos from './acelera/ModuloCursos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/principal' element={<Principal/>} />
        <Route path='/crear' element={<CrearCuenta/>} />
        <Route path='/editar' element={<EditarPerfil/>} />
        <Route path='/examen' element={<ExamenEntrada/>} />
        <Route path='/cursos' element={<ModuloCursos/>} />
      

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
