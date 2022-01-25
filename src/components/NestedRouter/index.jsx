import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

const messageObjs = [
    { id: 1, message: 'm1' },
    { id: 2, message: 'm2' }
]

export default class NestedRoutes extends Component {
    jumpByReplace = (m) => {
        this.props.history.replace(`/home/nested-router/detail/?id=${m.id}&msg=${m.message}`)
    }

    // ? 没有绑定this呀
    jumpByPush = (m) => {
        this.props.history.push(`/home/nested-router/detail/`, {id: m.id, msg: m.message})
    }
    render() {
        return (
            <div>
                <h3>嵌套组件内部（嵌套第一层）</h3>
                以下路由(蓝字)使用了 replace 模式
                <br></br>
                <ul>
                    {
                        messageObjs.map(m => {
                            return (
                                <li key={m.id}>

                                    <Link replace={true} to={`/home/nested-router/detail/${m.id}/${m.message}`}> {m.message} detail </Link>
                                    <button onClick={ () => this.jumpByReplace(m)}> replace 跳转，使用 search 传参</button>
                                    <button onClick={ () => this.jumpByPush(m)}> push 跳转，使用 state 传参</button>
                                </li>
                            )

                        })
                    }
                </ul>
                <Route path='/home/nested-router/detail/:id/:msg' component={Detail} />
                {/* <Route path='/home/nested-router/detail/' component={Detail} /> */}
            </div>
        )

    }
}
