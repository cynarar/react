import React from 'react';
import ReactDom from 'react-dom';

import Pai from './componentes/Pai';

const elemento = document.getElementById('root')

ReactDom.render(
  <div>
    {/*<PrimeiroComponente valor="Primeiro componente" />*/}
    {/*<CompA valor="TesteA"></CompA>
    <CompB valor="TesteB"></CompB>*/}
    {/*<MultiElementos />*/}
    {/*<FamiliaSilva></FamiliaSilva>*/}
    {/*<Familia sobrenome="Pereira">
      <Membro nome="André" />
      <Membro nome="Maria" />
  </Familia>*/}
    {/*<ComponenteComFuncao />*/}
    <Pai></Pai>
  </div>
  , elemento)