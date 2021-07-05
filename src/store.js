import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {fetchCars} from './reducers/reducers'
const initialState={}

const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    combineReducers({
        cars:fetchCars
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store
