import React from 'react'

import ArticlePreview from './ArticlePreview'
import ListPagination from './ListPagination'

const ArticleList = props => {
    return (
        <div>
            {
                props.articles?props.articles.map((article, i) => {
                    return <ArticlePreview key={i} article={article}/>
                }):null
            }
            <ListPagination page={props.page} count={props.articlesCount} setPage={props.setPage} />
        </div>
    )
}

export default ArticleList