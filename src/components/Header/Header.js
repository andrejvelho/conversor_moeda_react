import React from 'react';
import Logo from '../../assets/logo.png';
import './index.css';

function Header() {
    return(
        <header className="header">
            <img alt="Vue logo" src={ Logo }/>
            <h2>Conversor de Moedas</h2>
        </header>
    );
}

export default Header;