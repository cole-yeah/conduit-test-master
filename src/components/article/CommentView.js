import React from 'react'

import { Link } from 'react-router-dom'

const CommentView = props => {
    return (
        <div className='card'>
            <div className='card-block'>
                <p>content</p>
            </div>
            <div className='card-footer'>
                <Link className='comment-author' to={`/@${props.comment.author.username}`}>
                    <img className="comment-author-img" src={props.comment.author.image} alt={props.comment.author.username}/>
                </Link>
                <Link className='comment-author' to={`/@${props.comment.author.username}`}>
                    {props.comment.author.username}
                </Link>
                <span className="date-posted">
                    {new Date(props.comment.createdAt).toDateString()}
                </span>
            </div>
        </div>
    )
}

export default CommentView