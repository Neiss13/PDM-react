import React from 'react';
import './style.css';

const conta = () => {
  return (
    <div>
      <p>Arrow function da foto do Cazé</p>
    </div>
  );
};

const imagem = () => {
  return (
    <img src="https://s2.glbimg.com/7XjkpAoAQJAn5wdoXQzBpJHYBpU=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/D/b/46ilqtRYKn5Dxqn3asig/casimiro-miguel-1024x683.jpg"></img>
  );
};

export default function Arrow() {
  return (
    <div>
      {conta(2, 5)}
      <br />
      {imagem()}
    </div>
  );
}
