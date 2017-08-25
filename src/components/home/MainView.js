import React from 'react'

import ArticleList from '../ArticleList'

const GlobalFeedTab = props => {
    return (
        <li className='nav-item' onClick={props.loadHome}>
            <a className={props.active}>GlobalFeedTab</a>
        </li>
    )
}

const TagTab = props => {
    if(!props.tag) {
        return null
    }
    return (
        <li className='nav-item'>
            <a className='nav-link active'>#{props.tag}</a>
        </li>
    )
}

const MainView = props => {
    if(!props.article) {
        return null
    }
    return (
        <div className='col-md-9'>
            <div className='feed-toggle'>
                <ul className='nav nav-pills outline-active'>
                    <GlobalFeedTab loadHome={props.loadHome} active={props.tag?'nav-link':'nav-link active'}/>
                    <TagTab tag={props.tag}/>
                </ul>
            </div>
            <ArticleList page={props.page} articles={props.article.articles} setPage={props.setPage} articlesCount={props.article.articlesCount}/>
        </div>
    )
}

export default MainView