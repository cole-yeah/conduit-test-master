import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import action from '../actions/action'
import { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/actionTypes'

const mapStateToProps = state => ({
    ...state.login
})

const mapDispatchToProps = dispatch => ({
    onChangeLoginEmail: e => 
        dispatch({type: LOGIN_EMAIL, value: e.target.value}),
    onChangeLoginPassword: e =>
        dispatch({type: LOGIN_PASSWORD, value: e.target.value}),
    login: payload =>
        dispatch({type: [LOGIN_SUCCESS, LOGIN_FAIL], payload})
})

class Login extends Component {
    constructor(props) {
        super(props)
        // console.log('LoginPage--', props)
    }
    render() {
        const {email, password, onChangeLoginEmail, onChangeLoginPassword, login} = this.props
        return (
            <div className='container page'>
                {console.log('LoginPage--', this.props)}
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Sign In</h1>
                        <p className='text-xs-center'>
                            <Link to='/register'>Need an account?</Link>
                        </p>
                        <form>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input onChange={onChangeLoginEmail} value={email} type='email' className='form-control from-control-lg' placeholder='Email' />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input onChange={onChangeLoginPassword} value={password} type='password' className='form-control from-control-lg' placeholder='Password' />
                                </fieldset>
                            </fieldset>
                        </form>
                        <button onClick={() => login(action.Profile.login(email, password))} className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)