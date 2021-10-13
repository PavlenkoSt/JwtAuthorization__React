import React, { useState } from 'react'

const Form = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <div>
            <input
                type='email'
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
            />
            <input
                type='password'
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
            />
            <button
                
            >Login</button>
            <button

            >Register</button>
        </div>
    )
}

export default Form
