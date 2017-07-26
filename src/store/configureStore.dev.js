import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import api from '../middleware/api'
import rootReducer from '../reducers/index'

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(applyMiddleware(thunk))
    )

    if(module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store

}

export default configureStore