import './App.css'
import Form from './components/Form'
import useTypedSelector from './hooks/useTypedSelector'

const App = () => {
    const { auth, error } = useTypedSelector(state => state.authReducer)

    return (
        <div>
            { 
                auth 
                ? <div>Вы вошли</div>
                : <div>
                    <Form />
                    { error && error }
                </div> 
            }
        </div>
    )
}

export default App
