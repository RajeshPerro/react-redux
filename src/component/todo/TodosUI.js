import React from "react";

const TodosUI = ({ todos, deleteTodo}) =>
{
    console.log(todos);
    console.log('Length :', todos.length);
    const todoList = todos.length? (
        todos.map(todo => {
            return(
                
                <ul className="collection" key={todo.id}> 
                    <li className="collection-item" onClick={() => deleteTodo(todo.id)}><i className="tiny material-icons ">check</i> {todo.content}</li>
                </ul>
            )
        })
    ):(
        <p>You have no To-Do Left.!</p>
    )
    
    
    return(

        <div className="container">
            <div className="row">
                <div className="col s2"></div>
                <div className="col s6">
                    {todoList}
                </div>
                
                <div className="col s2"></div>
            </div>
        </div>
        
    )
}

export default TodosUI