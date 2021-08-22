import React, { Component } from 'react'
import './App.css'
import Jumbotron from './components/Jumbotron'
import Row from './components/Row'

export default class App extends Component {

  state = {
    data : [],
    isFirst : true,
    isLoading : false,
    isErr : false
  }

  // 传入要更新的 state 的值，进行设置
  setAll = (stateObj) => {
    this.setState({
      ...stateObj
    })
  }

  render() {
    return (
      <div>
        <div className="container">
        <Jumbotron setAll={this.setAll}/>
        <Row situation={this.state}/>
        </div>
      </div>
    )
  }
}
