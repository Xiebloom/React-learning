import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import NestedRouter from './components/NestedRouter'
import StateRouter from './components/StateRouter'
import { NavLink, Route, Link, Redirect, Switch } from 'react-router-dom'


export default class App extends Component {


    render() {

        const stateRouterData = {
            pathname: '/state-router',
            state: {
                msg: 'this is a page made by state-router'
            }
        }
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink activeClassName="myActive" className="list-group-item" to='/home'>Home</NavLink>
                            <Link className="list-group-item" to='/about'>About</Link>
                            <Link className="list-group-item" to='/about/?id=123'>About with id</Link>
                            <NavLink activeClassName="myActive" className="list-group-item" to={stateRouterData}> state router </NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由部分 */}
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/about' component={About} />
                                    <Route path='/about' component={NestedRouter} />
                                    <Route path='/state-router' component={StateRouter} />
                                    <Redirect to='/about' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
