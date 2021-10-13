import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import useTypedSelector from './hooks/useTypedSelector'

const App = () => {
    const { auth, error } = useTypedSelector(state => state.authReducer)

    return (
        <div>
            { 
                auth 
                ? <div>
                    <Header />
                    <div>Вы вошли</div>    
                </div>
                : <div>
                    <Form />
                    { error && error }
                </div> 
            }
        </div>
    )
}

export default App
