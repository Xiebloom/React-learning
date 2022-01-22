import React, { Component } from 'react'
import './index.css'
import Item from '../Item'

export default class List extends Component {
    render() {
        const { todos, changeTodoState, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map( (todo) => {
                        return <Item deleteTodo={deleteTodo} changeTodoState={changeTodoState} key={todo.id} {...todo}/>
                    })
                }
            </ul>
        )
    }
}
