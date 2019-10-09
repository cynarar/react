import React from 'react';
import ReactDom from 'react-dom';

import Familia from './componentes/Familia';
import Membro from './componentes/Membro';

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    {/*<PrimeiroComponente valor="Primeiro componente" />*/}
    {/*<CompA valor="TesteA"></CompA>
    <CompB valor="TesteB"></CompB>*/}
    {/*<MultiElementos />*/}
    {/*<FamiliaSilva></FamiliaSilva>*/}
    <Familia sobrenome="Pereira">
      <Membro nome="André" />
      <Membro nome="Maria" />
    </Familia>
  </div>
  , elemento)