import React, { Component } from 'react';
import TodosUI from './TodosUI'
import AddTodo from './AddTodo'
class Todo extends Component {
    state = {
        todos: [
            { id: 1, content: 'Go to the gym' },
            { id: 2, content: 'Cook fish' },
            { id: 3, content: 'Learn Redux' },
            { id: 4, content: 'Apply Job' },

        ]
    }
    deleteTodo = (id) => {
        console.log('need to delete : ', id);
        let todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })

        this.setState({

            // todos: todos  //normal way..
            //if the key and values both has same neame then we can just do this..
            todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random() * 10;
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        return (

            <div className="container">
                <div className="row center">
                    <h1 className="blue-text text-darken-2">My Todo List</h1>
                </div>
                <TodosUI todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div >

        );
    }
}

export default Todo;
