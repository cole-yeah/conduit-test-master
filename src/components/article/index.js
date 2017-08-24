import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import marked from 'marked'

import { ARTICLE_PAGE_LOADED } from '../../constants/actionTypes'
import CommentList from './CommentList'
import action from '../../actions/action' 

const mapStateToProps = state => ({
    article: state.article,
})

const mapDispatchToProps = dispatch => ({
    loadArticle: (payload) => dispatch({type: ARTICLE_PAGE_LOADED, payload}),
})

const Author = props => {
    if(props.article) {
        const article = props.article.article
        return (
            <div className='article-meta'>
                <Link to={`/@${article.author.username}`}>
                    {/**路由这里的前面要加/这个斜杠，不然跳转的还是在article的基础上，加上斜杠则是在一开始上*/}
                    <img src={article.author.image} alt={article.author.username}/>
                </Link>
                <div className='info'>
                    <Link to={`/@${article.author.username}`} className='author'>
                        {article.author.username}
                    </Link>
                    <span className='date'>
                        {new Date(article.createdAt).toDateString()}
                    </span>
                </div>
            </div>
        )
    }else {
        return null
    }
}

class Article extends Component {
    componentWillMount() {
        this.props.loadArticle(Promise.all([
            action.Articles.get(this.props.match.params.id),
            action.Comments.get(this.props.match.params.id)
            ]))
    }
    render() {
        if(!this.props.article.article) {
            return null
        }
        const article = this.props.article
        const markup = { __html: marked(article.article.body, { sanitizi: true })}
        return (
            <div className='article-page'>
                <div className='banner'>
                    <div className='container'>
                        <h1>{article.article.title}</h1>
                        <Author article={article}/>
                    </div>
                </div>
                <div className='container page'>
                    <div className='row article-content'>
                        <div className='col-xs-12'>
                            <div dangerouslySetInnerHTML={markup} />
                            <ul className='tag-list'>
                                {
                                    article.article.tagList.map((tag, i) => {
                                        return (
                                            <li className='tag-default tag-pill tag-outline' key={i}>{tag}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <CommentList comments={article.comments}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)