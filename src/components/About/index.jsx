import React, { Component } from 'react'
// import '../../bootstrap.css'
import qs from 'query-string'


export default class About extends Component {
    
    render() {
        console.log('props in <about> component', this.props)
        const { search } = this.props.location
        const searchData = qs.parse(search)
        console.log('search in <about> component', searchData);

        return (
            <div>
                <h3>About page</h3>
                <h4>重定向 {'&'} search参数</h4>
            </div>
        )
    }
}
