import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import flecha from 'Arrom'

import Arrow from './Arrow'
import Anonima from './Anonima';
import Classe from './Classe'

ReactDOM.render(
  <div>
    <h3>Arrow function</h3>
    <Arrow />

    <h3>Função Anônima</h3>
    <Anonima />


    <h3>Classe</h3>
    <Classe />
  </div>,
  document.getElementById('root')
);
