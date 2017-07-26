import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Header from '../components/Header'
import Login from '../components/Login'
import Register from '../components/Register'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


const BasicExample = () => (
  <BrowserRouter>
    <div>

      <Header/>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </BrowserRouter>
)
export default BasicExample