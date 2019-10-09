import React from 'react';

function filhosComProps(props) {
  return React.Children.map(props.children, filho => {
    return React.cloneElement(filho, { ...props })
  })
}

export { filhosComProps }