import React from 'react'

import ArticleList from '../ArticleList'

const GlobalFeedTab = () => {
    return (
        <li className='nav-item'>
            <a className='nav-link active'>GlobalFeedTab</a>
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
                    <GlobalFeedTab/>
                </ul>
            </div>
            <ArticleList articles={props.article.articles}/>
        </div>
    )
}

export default MainView