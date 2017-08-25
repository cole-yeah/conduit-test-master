import React from 'react'

const ListPagination = props => {
    if(!props.count) {
        return null
    }
    const count = Math.ceil(props.count/10)
    if(count < 1) {
        return null
    }
    const countArray = []
    for(let i=1; i<count+1; i++) {
        countArray.push(i)
    }
    return (
        <nav>
            <ul className='pagination'>
                {
                    countArray.map((arr, i) => {
                        const currentPage = props.page === arr?'page-item active':'page-item'
                        return (
                            <li key={i} className={currentPage} onClick={() => props.setPage(arr)}>
                                <a className='page-link'>{arr}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default ListPagination