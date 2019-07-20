import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newtodo } from '../actions'
import { toggledone } from '../actions'

class TodoForm extends Component {


     handleChanges = e => {
        e.preventDefault();
        this.props.newtodo(e.target.todo.value)
        e.target.todo.value =''
      };


    
    handleDone = (e,todo) =>{
        e.preventDefault();
        this.props.toggledone(todo)

    }

  render() {
    return (
        <div>
        <div>
        {this.props.todo.map((todo, id)=>{
            return(
                <h2  onClick ={()=>this.props.toggledone(todo)}key = {id}>{todo.newTodo} </h2>
            )
        })}
        </div>
      <div>
        <form onSubmit ={(event)=> this.handleChanges(event)}>
        <input name= "todo" type= "Text" placeholder= "New task"/>
        <button type ="submit" >Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(mapStateToProps)
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps,  {newtodo,toggledone} )(TodoForm);