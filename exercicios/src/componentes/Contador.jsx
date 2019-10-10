import React, { Component } from 'react';


export default class Contador extends Component {

  state = {
    numero: 0
  }

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={() => this.somar()}>+</button>
        <button onClick={() => this.diminuir()}>-</button>
      </div>
    )
  }

  somar() {
    this.setState({ numero: this.state.numero + 1 })
  }

  diminuir() {
    this.setState({ numero: this.state.numero - 1 })
  }

}