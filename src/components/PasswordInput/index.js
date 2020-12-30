import React, { useState } from 'react'

import './style.css'

import FormInput from '../../components/FormInput'

function PasswordInput() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    
    return (
        <div id="password-input">
            <FormInput type={passwordShown ? "text" : "password"} placeholder="Senha" />
            <button onClick={togglePasswordVisiblity}>{passwordShown ? "ocultar" : "mostrar"}</button>
        </div>
    )
}

export default PasswordInput