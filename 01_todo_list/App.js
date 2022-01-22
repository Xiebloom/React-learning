import './App.css';
import React from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    todos : [
      {id:'01', name:'御坂美琴', done:true},
      {id:'02', name:'神里凌华', done:false},
      {id:'03', name:'宝多六花', done:false}
    ]
  }
  
  addTodo = (todoObj) => {
    console.log('App received!', todoObj);
    let newTodo = [todoObj, ...this.state.todos]
    this.setState({todos: newTodo})
  }

  changeTodoState = (id, done) => {
    const {todos} = this.state
    let newTodos = todos.map(todo => {
      if (todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    // console.log('app', id);
    let newTodo = this.state.todos
    newTodo = newTodo.filter(todo => {
      return todo.id !== id
    })
    // console.log(newTodo);
    this.setState({todos:newTodo})
  }

  // 全选，全不选
  checkAllTodo = (allDone) => {
    // console.log(allDone);
    let newTodos = this.state.todos.map(todo => {
      return {...todo, done:allDone}
    })
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    let newTodos = this.state.todos.filter(todo => {
      return todo.done === false
    })
    
    this.setState({todos:newTodos})
  }

  render () {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} changeTodoState={this.changeTodoState} deleteTodo={this.deleteTodo}/>
          <Footer clearAllDone={this.clearAllDone} checkAllTodo={this.checkAllTodo} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}



export default App;
