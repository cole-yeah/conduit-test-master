import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainView from './MainView'
import action from '../../actions/action'
import Tags from './Tags'
import { HOME_PAGE_LOADED, LOAD_HOME_TAGS, LOAD_HOME_BY_TAG } from '../../constants/actionTypes'
let self
const Banner = () => (
    <div className='banner'>
        <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>a place to share your knowledge!</p>
        </div>
    </div>
)

const mapStateToProps = state => ({
    ...state.home,
    ...state.tags
})

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, page) => 
        dispatch({type: HOME_PAGE_LOADED, payload, page}),
    loadTags: (payload) => 
        dispatch({type: LOAD_HOME_TAGS, payload}),
    loadByTag: (payload, tag, page) => 
        dispatch({type: LOAD_HOME_BY_TAG, payload, tag, page})
})

class Home extends Component {

    componentWillMount() {
        self=this
        this.props.onLoad(action.Articles.all(0), 1),
        this.props.loadTags(action.Tags.get())
    }

    setPage(page) {
        self.props.tag?self.props.loadByTag(action.Articles.byTag(self.props.tag, page-1), self.props.tag, page):self.props.onLoad(action.Articles.all(page-1), page)
    }

    setTag(tag) {
        self.props.loadByTag(action.Articles.byTag(tag, 0), tag, 1)
    }

    render() {
        return (
            <div>
                <Banner/>
                <div className='container page'>
                    <div className='row'>
                        <MainView tag={this.props.tag} article={this.props.datas} page={this.props.page} setPage={this.setPage} loadHome={() => this.props.onLoad(action.Articles.all(0), 1)}/>
                        <div className='col-md-3'>
                            <div className='sidebar'>
                                <p>Popular Tags</p>
                                <Tags tags={this.props.tags} _setTag={this.setTag}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)