import React from 'react'

import './style.css'

function Header({ action }) {
    return (
        <header id="header-container">
            <p>Como Estou Lendo?</p>
            <a href='#'>{action}</a>
        </header>
    )
}

export default Header