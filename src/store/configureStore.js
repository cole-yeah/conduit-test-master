import { createStore, applyMiddleware, compose } from 'redux'

import { promiseMiddleware } from '../middleware'

import reducer from '../reducers/index'

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware);
  } else {
    return applyMiddleware(promiseMiddleware)
  }
}

const store = createStore(reducer, compose(getMiddleware()))

export default store;
