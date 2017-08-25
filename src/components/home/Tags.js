import React from 'react'

const Tags = props => {
    if(!props.tags) {
        return null
    }
    return (
        <div className='tag-list'>
            {
                props.tags.tags.map((tag, i) => {
                    return (
                        <a key={i} className='tag-default tag-pill' onClick={() => props._setTag(tag)}>{tag}</a>
                    )
                })
            }
        </div>
    )
}

export default Tags