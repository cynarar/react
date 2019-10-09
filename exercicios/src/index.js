import React from 'react';
import ReactDom from 'react-dom';

import { CompA, CompB } from './componentes/DoisComponentes';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    <PrimeiroComponente valor="Primeiro componente" />
    <CompA valor="TesteA"></CompA>
    <CompB valor="TesteB"></CompB>
  </div>
  , elemento)