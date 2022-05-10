import React from 'react';
import React, { Component } from 'react';

export default class Classe extends Component {
  render() {
    return (
      <div>
        <p>IMC do Cazé: </p>{CalcIMC()}

      </div>
    );
  }
}
function CalcIMC(){
  let peso = 120
  let altura = 1.85
  const IMC = peso / altura ** 2
  return(IMC)
}