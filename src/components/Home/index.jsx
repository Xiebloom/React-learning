import React, { Component } from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'
import NestedRouter from '../NestedRouter'
import Message from './Message'
import WithRouterDemo  from './WithRouterDemo'
// import '../../bootstrap.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <WithRouterDemo />
                <h3>Home page</h3>
                <p> Home 组件的内容</p>
                <NavLink to='/home/message' activeClassName="myActive" className="list-group-item" >nested-router 1 - Null Message</NavLink> 
                <NavLink to='/home/nested-router' activeClassName="myActive" className="list-group-item" >nested-router 2 - Message Detail </NavLink>
                <Route path='/home/message' component={Message} />
                <Route path='/home/nested-router' component={NestedRouter} />
                <Redirect to='/home/message' />
                
            </div>
        )
    }
}
