import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainView from './MainView'

const Banner = () => (
    <div className='banner'>
        <div className='container'>
            <h1 className='logo-font'>conduit</h1>
            <p>a place to share your knowledge!</p>
        </div>
    </div>
)

const Home = props => {
    return (
        <div>
            <Banner/>
            <div className='container page'>
                <div className='row'>
                    <MainView/>
                </div>
            </div>
        </div>
    )
}

export default Home