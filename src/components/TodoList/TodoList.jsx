import React, { Component } from "react";
import TodoItem from './TodoItem';
import {connect} from 'react-redux';
class TodoList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {todos} = this.props;
    return <div>
       {todos.map(todo=>{
         return <TodoItem key={todo.id} todo={todo}/>
       })}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  }
}

export default connect(mapStateToProps)(TodoList);
