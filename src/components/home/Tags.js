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
                        <a className='tag-default tag-pill'>{tag}</a>
                    )
                })
            }
        </div>
    )
}

export default Tags