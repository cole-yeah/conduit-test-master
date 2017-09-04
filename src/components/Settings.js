import React, { Component } from 'react'
import { connect } from 'react-redux'

import action from '../actions/action'
import { SETTINGS_LOGOUT, SETTINGS_INPUT, SETTINGS_SUCCESS, SETTINGS_FAIL } from '../constants/actionTypes'

const mapStateToProps = state => ({
    ...state.login,
    settings: state.settings
})

const mapDispatchToProps = dispatch => ({
    logout: () => 
        dispatch({type: SETTINGS_LOGOUT}),
    settingsOnChange: (key, value) => 
        dispatch({type: SETTINGS_INPUT, key, value}),
    settingsAction: (payload) => 
        dispatch({type: [SETTINGS_SUCCESS, SETTINGS_FAIL], payload})
})

const SettingsForm = props => {
    return (
        <div style={{marginBottom: 60}}>
            <form>
                <fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props.settingsOnChange('image', e.target.value)} value={props.image} className='form-control' type='text' placeholder='URL of profile picture'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props.settingsOnChange('username', e.target.value)} value={props.username} className='form-control form-control-lg' type='text' placeholder='Username'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <textarea onChange={(e) => props.settingsOnChange('bio', e.target.value)} value={props.bio} className='form-control form-control-lg' rows='8' placeholder='Short bio about you'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props.settingsOnChange('email', e.target.value)} value={props.email} className='form-control form-control-lg' type='email' placeholder='Email'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input onChange={(e) => props.settingsOnChange('password', e.target.value)} value={props.password} className='form-control form-control-lg' type='password' placeholder='New Password'/>
                    </fieldset>
                </fieldset>
            </form>
            <button onClick={props._settings} className='btn btn-lg btn-primary pull-xs-right'>Update Settings</button>
        </div>
    )
}

class Settings extends Component {

    componentWillReceiveProps(nextProps) {
        if(!nextProps.hasLogin) {
            nextProps.history.replace('/')
            return 
        }else if(nextProps.settings.reSetted) {
            nextProps.history.replace('/')
            return 
        }
    }

    render() {
        const { hasLogin, logout, history, settingsOnChange, settings, settingsAction } = this.props
        console.log('settings', this.props)
        return (
            <div className='settings-page'>
                <div className='container page'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3 col-xs-12'>
                            <h1 className='text-xs-center'>Your Settings</h1>
                            <SettingsForm _settings={() => settingsAction(action.Profile.settings({...settings}))} settingsOnChange={settingsOnChange} {...settings}/>
                            <hr/>
                            <button onClick={() => logout()} className='btn btn-outline-danger'>Or click here to logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)