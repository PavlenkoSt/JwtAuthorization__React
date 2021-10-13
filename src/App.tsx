import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import useTypedSelector from './hooks/useTypedSelector'
import authActionCreators from './store/reducers/auth/action-creators'

const App = () => {
    const { auth, error, loading } = useTypedSelector(state => state.authReducer)

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
            <div>
                <Form />
                { error && error }
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div>Вы вошли</div>    
        </div>
    )
}

export default App
