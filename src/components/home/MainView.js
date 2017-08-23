import React from 'react'
// import { connect } from 'react-redux'

const GlobalFeedTab = () => {
    return (
        <li className='nav-item'>
            <a className='nav-link active'>GlobalFeedTab</a>
        </li>
    )
}

const MainView = () => {
    return (
        <div className='col-md-9'>
            <div className='feed-toggle'>
                <ul className='nav nav-pills outline-active'>
                    <GlobalFeedTab/>
                </ul>
            </div>
        </div>
    )
}

export default MainView