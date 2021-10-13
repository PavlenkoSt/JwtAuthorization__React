import React from 'react'
import { useDispatch } from 'react-redux'
import authActionCreators from '../store/reducers/auth/action-creators'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <header className='header'>
            <button 
                onClick={ () => dispatch(authActionCreators.logoutThunk()) }
                className='btn'
            >
                Выйти
            </button>
        </header>
    )
}

export default Header