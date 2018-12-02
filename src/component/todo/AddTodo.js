import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) =>
    {
        this.setState({
            content : e.target.value
        })
        
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.addTodo(this.state);
        
        this.setState({
            content:''
        })

    }
    render() {
        return (

            <div className="container add-todo">
                   <div className="row">
                    <div className="col s2"></div>
                    <form onSubmit={this.handleSubmit}>
                       
                        <div className="input-field col s8">  
                            <label>Add new Todo</label> <br/> 
                            <input id="content" type="text" className="validate"  onChange={this.handleChange} value={this.state.content}/>
                        </div>
                    </form>
                    <div className="col s2"></div>
                    </div>      
            </div>
                        
                   
        );
    }
}

export default AddTodo