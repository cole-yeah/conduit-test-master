import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Sign In</h1>
                        <p className='text-xs-center'>
                            <Link to='/register'>Need an account?</Link>
                        </p>
                        <form>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input type='email' className='form-control from-control-lg' placeholder='Email' />
                                </fieldset>
                                <fieldset className='form-group'>
                                    <input type='password' className='form-control from-control-lg' placeholder='Password' />
                                </fieldset>
                                <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login