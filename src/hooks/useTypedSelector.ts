import { TypedUseSelectorHook, useSelector } from "react-redux"
import { rootReducerType } from "../store/reducers"


const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector

export default useTypedSelector