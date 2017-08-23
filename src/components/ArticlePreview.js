import React from 'react'
import { Link } from 'react-router-dom'

const ArticlePreview = props => {
    return (
        <div className='article-preview'>
            <div className='article-meta'>
                <Link>
                    <a>
                        <img/>
                    </a>
                </Link>
                <div className='info'>
                    <Link className='author'>
                        <a className='author'></a>
                    </Link>
                    <span className='date'></span>
                </div>
                <div className='pull-xs-right'>
                    <button className='btn btn-sm btn-outline-primary'>
                        <i className='ion-heart'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArticlePreview