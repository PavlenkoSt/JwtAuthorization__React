import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import useTypedSelector from './hooks/useTypedSelector'
import authActionCreators from './store/reducers/auth/action-creators'

const App = () => {
    const { auth, error, loading, userData } = useTypedSelector(state => state.authReducer)

    const dispatch = useDispatch()

    useEffect(() => {   
        if(localStorage.getItem('token')){
            dispatch(authActionCreators.checkAuth())
        }
    }, [])

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
            </div>   
        </div>
    )
}

export default App
