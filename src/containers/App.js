import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Header from '../components/common/Header'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/home/Home'


const BasicExample = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <div className='home-page'>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        </div>
    </BrowserRouter>
)
export default BasicExample