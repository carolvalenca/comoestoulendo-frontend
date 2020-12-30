import React from 'react'

import './style.css'

function FormInput({ placeholder, type }) {
    return (
        <input id="form-input" type={type} placeholder={placeholder}/>
    )
}

export default FormInput