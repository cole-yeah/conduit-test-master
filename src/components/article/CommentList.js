import React from 'react'

import CommentView from './CommentView'
import CommentInput from './CommentInput'

const CommentList = props => {
    return (
        <div>
            <CommentInput/>
            {
                props.comments.length?props.comments.map((comment, i) => {
                    return <CommentView key={i} comment={comment}/>
                }):null
            }
        </div>
    )
}

export default CommentList