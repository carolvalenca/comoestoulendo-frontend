import React, { useState } from 'react'

import './style.css'

import Icon from '../../assets/ReadingDoodle.svg'

function Register() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div id="register-container">
            <div className="form">
                <form>
                    <h3>Criar Conta</h3>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Email"/>
                    <div className='password-wrapper'>
                        <input type={passwordShown ? "text" : "password"} placeholder="Senha"/>
                        <button onClick={togglePasswordVisiblity}>{passwordShown ? "ocultar" : "mostrar"}</button>
                    </div>
                    <p>
                        Já possui uma conta?
                        <a href="#">Fazer login</a>
                    </p>
                    <button>Cadastrar</button>
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

