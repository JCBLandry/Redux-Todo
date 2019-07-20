import {NEWTODO, TOGGLEDONE} from './actions'

const initialState ={
        todo:[
        {
            newTodo:'',
            id:1,
            done: false
        }
    ]
} 

const indexReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEWTODO:
        return {
          todo: [...state.todo, action.payload]
        };
        case TOGGLEDONE:
        return{
            todo:state.todo.map(todo =>{
                if(todo.id !== action.payload.id){
                    return todo
                }
                else{
                    return action.payload
                }})}

           default:
        return state;
    }
  };

  export default indexReducer
