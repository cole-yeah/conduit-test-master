import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
    ...state.login
})

const mapDispatchToProps = dispatch => ({

})

const LoginView = () => {
    return (
        <ul className='nav navbar-nav pull-xs-right'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/login'>Sign in</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/register'>Sign up</Link></li>
        </ul>
    )
} 

const UserView = props => {
    return (
        <ul className='nav navbar-nav pull-xs-right'>
            <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/'><i className='ion-compose'/>New Post</Link></li>
            <li className='nav-item'><Link className='nav-link' to='/settings'><i className='ion-gear-a'/>Settings</Link></li>
            <li className='nav-item'><Link className='nav-link' to={`@${props.user.user.username}`}>{props.user.user.username}</Link></li>
        </ul>
    )
}

class Header extends Component {
    render() {
        const { hasLogin, user } = this.props
        return (
            <nav className='navbar navbar-light'>
                <div className='container'>
                    <Link to='/' className='navbar-brand'>Conduit</Link>
                    {
                        hasLogin?<UserView user={user}/>:<LoginView/>
                    }
                </div>
            </nav>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)