import React from 'react';

import { filhosComProps } from '../util/utils';

/**
 * Faz um laço para cada componente filho
 */
export default props =>
  <div>
    <h1>Família {props.sobrenome}</h1>
    {filhosComProps(props)}
    {/*React.Children.map(props.children, filho => {
      return React.cloneElement(filho,
        { sobrenome: props.sobrenome })
    })*/}
    {/*React.cloneElement(props.children,
      { sobrenome: props.sobrenome })*/}
    {/*props.children*/}
  </div>