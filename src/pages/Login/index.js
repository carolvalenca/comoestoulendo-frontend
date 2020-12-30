import React, { useState } from 'react'

import './style.css'
import Img from '../../assets/book.svg'

import LandingPageButton from '../../components/LandingPageButton'
import FormInput from '../../components/FormInput'
import PasswordInput from '../../components/PasswordInput'
import Header from '../../components/Header'

function Login() {
    return (
        <div id="login-container">
            <Header action="Cadastrar" />
            <div className="form">
                <form>
                    <h3>Fazer Login</h3>
                    <img src={Img}></img>
                    <FormInput type="text" placeholder="Email" />
                    <PasswordInput />
                    <LandingPageButton content="Entrar" />
                </form>
            </div>
        </div>
    )
}

export default Login