import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authActionCreators from '../store/reducers/auth/action-creators'

const Form = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const dispatch = useDispatch()
    
    const login = () => {
        if (email && password) {
            dispatch(authActionCreators.loginThunk(email, password))
            return
        }
        dispatch(authActionCreators.setError('Почта и пароль не могут быть пустыми'))
    }

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
                onClick={ login }
            >Login</button>
            <button

            >Register</button>
        </div>
    )
}

export default Form
