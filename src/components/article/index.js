import React from 'react'

const Article = props => {
    return (
        <div>
            456
            {console.log('article', props.match.params.id)}
        </div>
    )
}

export default Article