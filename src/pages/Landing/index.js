import React from 'react'

import './style.css'

import Img from '../../assets/MessyDoodle.svg'
import LandingPageButton from '../../components/LandingPageButton'
import Header from '../../components/Header'

function Landing() {
    return (
        <div id="landing-container">
            <Header action="Login" />
            <img src={Img}></img>
            <div>
                <h1>Organize suas leituras</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla orci libero, ac posuere velit faucibus in. Quisque ac tellus nibh. Vivamus eu mauris a diam efficitur hendrerit nec at mi. Cras porttitor condimentum mauris, sed tincidunt odio imperdiet quis.</p>
                <a href='#register-container'>
                    <LandingPageButton content="Fazer cadastro" />
                </a>
            </div>
        </div>
    )
}

export default Landing

