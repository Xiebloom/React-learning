import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import {NavLink, Route} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-offset-2 col-xs-8">
            <div class="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <NavLink activeClassName="myActive" className="list-group-item" to='/home'>Home</NavLink>
              <NavLink className="list-group-item" to='/about'>About</NavLink>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="panel">
              <div class="panel-body">
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
