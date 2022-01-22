import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    checkAll = (event) => {
        const {checkAllTodo} = this.props
        checkAllTodo(event.target.checked)
    }

    render() {
        const {todos, clearAllDone} = this.props
        let count = todos.reduce((prev,curr) => {
            return prev + (curr.done === true ? 1 : 0)
        },0)
        return (
            <div className="todo-footer">
                <label>
                    <input onClick={this.checkAll} type="checkbox" checked={todos.length===count&&count!==0?true:false}/>
                </label>
                <span>
                    <span>已完成 {count}</span> / 全部 {todos.length}
                </span>
                <button onClick={clearAllDone} className="btn btn-danger">和勾选的老婆离婚</button>
            </div>
        )
    }
}
