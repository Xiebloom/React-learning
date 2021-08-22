import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'
import propTypes from 'prop-types'

export default class Header extends Component {

    static propTypes = {
        addTodo: propTypes.func.isRequired
    }

    handler = (event) => {
        // 判断按下的是否是回车,不是回车就再见
        if (event.keyCode !== 13) {
            return ;
        }
        // 非法值判断
        if (event.target.value.trim().length === 0) return;
        // 使用 addTodo 将新的 todo 传递给 App
        const {addTodo} = this.props
        addTodo({id:nanoid(), name:event.target.value, done:false})
        // 清空输入框
        event.target.value = ''
    }

    render() {
        
        return (
            <div>
                <div className="todo-header">
                    <input type="text" onKeyUp={this.handler} placeholder="请输入你的老婆，按回车键确认" />
                </div>
            </div>
        )
    }
}
