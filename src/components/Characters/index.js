import React from 'react';

import Character from './Character';

import './style.scss';

export default function Characters() {
    return(
        <ul className="characters">
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
        </ul>
    );
}