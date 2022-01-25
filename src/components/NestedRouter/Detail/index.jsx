import React, { Component } from 'react';
import qs from 'query-string'

const data = [
    { id: 1, message: 'Detail1'}, 
    { id: 2, message: 'Detail2'}
]

export default class Detail extends Component {
    render() {
        console.log('props of component Detail is ', this.props);
        const { params } = this.props.match;
        const { search, state} = this.props.location;
        
        let id, msg
        let routerPassDataBy = ''
        // 判断路由传数据的方式
        if ( Object.keys(params).length !== 0) {
            routerPassDataBy = 'params'
            const data = params
            id = data.id
            msg = data.msg
        } else if(search !== ''){
            routerPassDataBy = 'search'
            const data = qs.parse(search)
            id = data.id
            msg = data.msg

        } else {
            routerPassDataBy = 'state'
            const data = state
            id = data.id
            msg = data.msg
        }
        return (
            <div>
                <h4> Detail 内容 （嵌套第二层）</h4>
                路由传输数据的方式为 {routerPassDataBy}
                <br></br>
                当前网页的 params 路由参数为：{`${id} + ${msg}`}
            </div>
        )
    }
}
