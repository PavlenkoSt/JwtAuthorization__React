import React from 'react'
import { useDispatch } from 'react-redux'
import authActionCreators from '../store/reducers/auth/action-creators'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button
                onClick={ () => dispatch(authActionCreators.logoutThunk()) }
            >Выйти</button>
        </div>
    )
}

export default Header