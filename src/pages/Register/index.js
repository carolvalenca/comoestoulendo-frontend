import React, { useState } from 'react'

import './style.css'

import Icon from '../../assets/ReadingDoodle.svg'
import LandingPageButton from '../../components/LandingPageButton'
import FormInput from '../../components/FormInput'
import PasswordInput from '../../components/PasswordInput'

function Register() {
    return (
        <div id="register-container">
            <div className="form">
                <form>
                    <h3>Criar Conta</h3>
                    <FormInput type="text" placeholder="Nome" />
                    <FormInput type="text" placeholder="Email" />
                    <PasswordInput />
                    <p>
                        Já possui uma conta?
                        <a href="#">Fazer login</a>
                    </p>
                    <LandingPageButton content="Cadastrar" />
                </form>
            </div>
            <div className="info">
                <div className="teste"></div>
                <img src={Icon}></img>
            </div>
        </div>
    )
}

export default Register

