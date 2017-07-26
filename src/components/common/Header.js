import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const LoginView = () => {
    return (
        <ul className='nav navbar-nav pull-xs-right'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/login'>Sign in</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/register'>Sign up</Link></li>
        </ul>
    )
} 

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-light'>
                <div className='container'>
                    <Link to='/' className='navbar-brand'>Conduit</Link>
                    <LoginView/>
                </div>
            </nav>
        )
    }
}

export default Header