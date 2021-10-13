import './App.css'
import Form from './components/Form'
import useTypedSelector from './hooks/useTypedSelector'

const App = () => {
    const { auth } = useTypedSelector(state => state.authReducer)

    console.log(auth);

    if (!auth) {
        <div>
            <Form />
        </div>
    }

    return (
        <div>
            Вы вошли!
        </div>
    )
}

export default App
