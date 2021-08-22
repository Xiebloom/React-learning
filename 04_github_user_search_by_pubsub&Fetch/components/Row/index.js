import React, { Component } from 'react'
import Item from '../Item'
import pb from 'pubsub-js'

export default class row extends Component {

    state = {
        data : [],
        isFirst : true,
        isLoading : false,
        isErr : false
    }

    componentDidMount () {
        // 订阅
        this.token = pb.subscribe('Change State', (_, newData) => {
            // 更新 state
            this.setState(newData)
        })
    }

    componentWillUnmount () {
        // 销毁组件前取消订阅
        pb.unsubscribe(this.token)
    }

    render() {
        let {isFirst, isLoading, data, isErr} = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst === true ? <h2>Welcome!</h2> :
                        isLoading === true ? <h2> Loading... </h2> :
                        isErr ? <h2>{isErr}</h2> :
                        data.map(item => {
                            return <Item key={item.login} data={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
