import { combineReducers } from 'redux'
import article from './article'
import home from './home'
import profile from './profile'
import tags from './tags'
import register from './register'
import login from './login'

const rootReducer = combineReducers({
    article,
    home,
    profile,
    tags,
    register,
    login
})

export default rootReducer