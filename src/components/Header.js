import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const LoginView = () => {
    return (
        <ul className='col-md-4'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Sign in</Link></li>
            <li><Link to='/register'>Sign up</Link></li>
        </ul>
    )
} 

class Header extends Component {
    render() {
        return (
            <nav className='row'>
                <h2 className='col-md-8'>Conduit</h2>
                <LoginView/>
            </nav>
        )
    }
}

export default Header