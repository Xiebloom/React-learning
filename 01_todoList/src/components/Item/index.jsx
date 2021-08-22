import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouseFlag : false
    }

    handleMouse = (flag) => {
         return () => {
            this.setState({mouseFlag : flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked);
            this.props.changeTodoState(id,event.target.checked)
        }
    }

    // 删除事件
    handleDelete = (id) => {
        // console.log(id);
        let flag = window.confirm('are you sure?')
        if ( !flag ) return ;
        const { deleteTodo } = this.props
        // 传递给父组件
        deleteTodo(id)
    }

    render() {
        const {id, done, name} = this.props 
        return (
            <li style={{backgroundColor:this.state.mouseFlag === true ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done} />
                    <span> {name} </span>
                </label>
                <button className="btn btn-danger" onClick={()=>{this.handleDelete(id)}} style={{ display: this.state.mouseFlag===true?'block':'none' }}>删除</button>
            </li>
        )
    }
}
