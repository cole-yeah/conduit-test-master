import React from 'react'

import ArticlePreview from './ArticlePreview'

const ArticleList = props => {
    return (
        <div>
            {
                props.articles?props.articles.map((article, i) => {
                    return <ArticlePreview key={i} article={article}/>
                }):null
            }
        </div>
    )
}

export default ArticleList