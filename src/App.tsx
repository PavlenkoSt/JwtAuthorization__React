import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import useTypedSelector from './hooks/useTypedSelector'
import authActionCreators from './store/reducers/auth/action-creators'
import usersActionCreators from './store/reducers/users/action-creators'

const App = () => {
    const { auth, error, loading, userData } = useTypedSelector(state => state.authReducer)
    const { users } = useTypedSelector(state => state.usersReducer)

    const dispatch = useDispatch()

    useEffect(() => {   
        if(localStorage.getItem('token')){
            dispatch(authActionCreators.checkAuth())
        }
    }, [])

    const getUsers = () => {
        dispatch(usersActionCreators.setUsersThunk())
    }

    if (loading) {
        return <div>Загрузка...</div>
    }

    if (!auth) {
        return (
            <div className='form-layout'>
                <Form />
                <div className='error'>
                    { error && error }
                </div>
            </div>
        )
    }

    

    return (
        <div>
            <Header />
            <div className='content'>
                <div className='greet'>Вы в системе под { userData.email }</div> 

                <button 
                    className='btn'
                    onClick={ getUsers }
                >Получить всех пользователей</button>

                <div className='users-list'>
                    { users.map((user, idx) => <div key={ user.email }>{ idx + 1 }. { user.email }</div>) }
                </div>
            </div>   
        </div>
    )
}

export default App
