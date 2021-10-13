import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import authActionCreators from '../store/reducers/auth/action-creators'

const FormComponent = () => {

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

    const register = () => {
        if (email && password) {
            dispatch(authActionCreators.registerThunk(email, password))
            return
        }
        dispatch(authActionCreators.setError('Почта и пароль не могут быть пустыми'))
    }

    return (
        <div
            className='form'
        >  
            <input
                type='email'
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                className='input'
                placeholder='Email'
            />
            <input
                type='password'
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                className='input'
                placeholder='Password'
            />
            <button
                onClick={ login }
                className='form-btn'
            >Login</button>
            <button
                onClick={ register }
                className='form-btn'
            >Register</button>
        </div> 
    )

    
}

export default FormComponent
