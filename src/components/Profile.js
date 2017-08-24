import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LOAD_PROFILE } from '../constants/actionTypes'
import action from '../actions/action'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    loadProfile: payload => 
        dispatch({type: LOAD_PROFILE, payload})
})

class Profile extends Component{

    componentWillMount() {
        this.props.loadProfile(action.Profile.get(this.props.match.params.username))
    }

    render() {
        return (
            <div>
                {console.log('Profile', this.props)}
                {this.props.match.params.username}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)