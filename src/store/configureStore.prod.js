import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../applyMiddleware/api'
import rootReducer from '../reducers/index'

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, api)
)

export default configureStore