import React from 'react'

import './style.css'

import Icon from '../../assets/reading.svg'

function Register() {
    return (
        <div id="register-container">
            <div className="form">
                <form>
                    <h3>Criar Conta</h3>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <p>
                        Já possui uma conta?
                        <a href="#">Fazer login</a>
                    </p>
                    <button>Cadastrar</button>
                </form>
            </div>
            <div className="info">
                <img src={Icon}></img>
            </div>
        </div>
    )
}

export default Register

