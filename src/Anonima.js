import React from 'react';
import React, { view, text } from 'react';

export default function () {
  return (
    <div>
      <form>
        <label for nome="nome"> Nome: </label>
        <br />
        <input type="text" placeholder="Casimiro" />
        <br />
        <label>Idade (em anos): </label>
        <br />
        <input type="number" placeholder="28" />
        <br />
        <label>Profissão: </label>
        <br />
        <input type="text" placeholder="Streamer" />
        <br />
        <br />
        <input type="submit" value="METEU ESSA?" />
      </form>
    </div>
  );
}
