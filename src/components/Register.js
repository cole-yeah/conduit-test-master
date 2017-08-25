import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import action from '../actions/action'
import { CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_EMAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../constants/actionTypes'

const mapStateToProps = state => ({
    ...state.register
})

const mapDispatchToProps = dispatch => ({
    onChangeUsername: (e) => 
        dispatch({type: CHANGE_USERNAME, value: e.target.value}),
    onChangePassword: (e) =>
        dispatch({type: CHANGE_PASSWORD,value: e.target.value}),
    onChangeEmail: (e) =>
        dispatch({type: CHANGE_EMAIL, value: e.target.value}),
    register: (payload) =>
        dispatch({type: [REGISTER_SUCCESS, REGISTER_FAIL], payload})
})

class Register extends Component {
    render() {
        const {username, password, email, onChangeEmail, onChangeUsername, onChangePassword, register} = this.props
        return (
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Sign Up</h1>
                        <p className='text-xs-center'>
                            <Link to='/login'>Have an account?</Link>
                        </p>
                        <form>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input onChange={onChangeUsername} value={username} type='text' className='form-control from-control-lg' placeholder='Username' />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input onChange={onChangeEmail} value={email} type='email' className='form-control from-control-lg' placeholder='Email' />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input onChange={onChangePassword} value={password} type='password' className='form-control from-control-lg' placeholder='Password' />
                                </fieldset>
                            </fieldset>
                        </form>
                        <button onClick={() => register(action.Profile.register(username, email, password))} className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)