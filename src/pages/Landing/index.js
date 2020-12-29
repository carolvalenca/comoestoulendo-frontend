import React from 'react'

import './style.css'

import Img from '../../assets/MessyDoodle.svg'

function Landing() {
    return (
        <div id="landing-container">
            <header>
                <p>Como Estou Lendo?</p>
                <a href='#'>Login</a>
            </header>
            <img src={Img}></img>
            <div>
                <h1>Organize suas leituras</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla orci libero, ac posuere velit faucibus in. Quisque ac tellus nibh. Vivamus eu mauris a diam efficitur hendrerit nec at mi. Cras porttitor condimentum mauris, sed tincidunt odio imperdiet quis.</p>
                <a href='#register-container'>
                    <button>Fazer cadastro</button>
                </a>
            </div>
        </div>
    )
}

export default Landing

