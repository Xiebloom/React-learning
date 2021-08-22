import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  sendRequest = (url) => {
    axios.get('http://localhost:3000/'+url).then(
      response => console.log('success', response.data),
      error => console.log('failed!', error)
    )
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.sendRequest('api1/students')}}>click to send request</button>
        <button onClick={()=>{this.sendRequest('api2/cars')}}>click to send request</button>
      </div>
    )
  }
}
