import { createStore, applyMiddleware, compose } from 'redux'

import { promiseMiddleware, localStorageMiddleware } from '../middleware'

import reducer from '../reducers/index'

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
  } else {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware)
  }
}

const store = createStore(reducer, compose(getMiddleware()))

export default store;
