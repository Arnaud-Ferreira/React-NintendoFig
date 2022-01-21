import React from 'react';

import './style.scss';

export default function Header() {
    return(
        <header className="header">
          <h1 className="header__title">
          Nintendo - Figurines
          </h1>
          <p className="header__game-number">X jeux</p>
          <input
           className="header__input"
           type="text"
           placeholder="Search a figurine..."
           />
        </header>
    );
}