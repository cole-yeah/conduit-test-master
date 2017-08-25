import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LOAD_PROFILE } from '../constants/actionTypes'
import ArticleList from './ArticleList'
import action from '../actions/action'

const mapStateToProps = state => ({
    ...state.profile
})

const mapDispatchToProps = dispatch => ({
    loadProfile: payload => 
        dispatch({type: LOAD_PROFILE, payload})
})

const FollowUserButton = props => {
    return (
        <button className='btn btn-sm action-btn btn-outline-secondary'>
            <i className='ion-plus-round' />
            Follow {props.username}
        </button>
    )
}

class Profile extends Component{

    componentWillMount() {
        this.props.loadProfile(Promise.all([
            action.Profile.get(this.props.match.params.username),
            action.Articles.byAuthor(this.props.match.params.username, 0)
            ]))
    }

    render() {
        if(!this.props.profile) {
            return null
        }
        return (
            <div className='profile-page'>
                <div className='user-info'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12 col-md-10 offset-md-1'>
                                <img className='user-img' src={this.props.profile.image} alt={this.props.profile.username}/>
                                <h4>{this.props.match.params.username}</h4>
                                <br/>
                                <FollowUserButton username={this.props.match.params.username}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-md-10 offset-md-1'>
                            <div className='articles-toggle'>
                                <ul className='nav nav-pills outline-active'></ul>
                            </div>
                            <ArticleList articles={this.props.articles}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)