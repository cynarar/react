import React from 'react';
import ReactDom from 'react-dom';

import Hook from './componentes/Hook';

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
    {/*<Pai></Pai>*/}
    {/* <ComponenteClasse valor="Sou um componente de classe"></ComponenteClasse> */}
    {/* <Contador numero={0}></Contador> */}
    <Hook></Hook>
  </div>
  , elemento)