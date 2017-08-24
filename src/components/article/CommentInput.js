import React from 'react'
import { Link } from 'react-router-dom'

const CommentInput = props => {
    return (
        <div>
            <p>
                <Link to='/login'>Sign in </Link>
                or
                <Link to='/register'> Sign up </Link>
                to add comments on this article.
            </p>
        </div>
    )
}

export default CommentInput