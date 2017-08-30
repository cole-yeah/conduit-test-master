import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../components/common/Header'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/home/Home'
import Profile from '../components/Profile'
import Article from '../components/article'
import Settings from '../components/Settings'

import action from '../actions/action'
import {LOGIN_SUCCESS, LOGIN_FAIL} from '../constants/actionTypes'

let localStorage = window.localStorage

const mapStateToProps = state => ({
    ...state.login
})

const mapDispatchToProps = dispatch => ({
    appLoad: payload =>
        dispatch({type: [LOGIN_SUCCESS, LOGIN_FAIL], payload})
})

class BasicExample extends Component {
    componentWillMount() {
        if(localStorage.token) {
            action.setToken(localStorage.token)
            this.props.appLoad(action.Profile.info())
        }
    }
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className='home-page'>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                    <Route path='/article/:id' component={Article} />
                    <Route path='/@:username' component={Profile}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicExample)