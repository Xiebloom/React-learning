import React, { Component } from 'react'
import './App.css'
import Jumbotron from './components/Jumbotron'
import Row from './components/Row'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <Jumbotron/>
        <Row/>
        </div>
      </div>
    )
  }
}
