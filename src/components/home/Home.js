import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainView from './MainView'
import action from '../../actions/action'
import { HOME_PAGE_LOADED } from '../../constants/actionTypes'

const Banner = () => (
    <div className='banner'>
        <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>a place to share your knowledge!</p>
        </div>
    </div>
)

const mapStateToProps = state => ({
    articles: state.home
})

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) => 
        dispatch({type: HOME_PAGE_LOADED, payload})
})

class Home extends Component {

    componentWillMount() {
        this.props.onLoad(action.Articles.all('10'))
    }

    render() {
        return (
            <div>
                <Banner/>
                <div className='container page'>
                    <div className='row'>
                        <MainView article={this.props.articles.datas}/>
                        <div className='col-md-3'>
                            <div className='sidebar'>
                                <p>Popular Tags</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)