export const NEWTODO = 'NEWTODO';
export const TOGGLECOMPLETE = 'TOGGLEDONE';
export const DELETETODO = 'DELETETODO';

export const addtodo = newTodo => {
    return {
      type: NEWTODO,
      payload:{
          newTodo,
          id: Date.now(),
          done: false,
      }
    };
  };

  export const toggledone = newTodo =>{
    return{
        type: TOGGLEDONE,
        payload:{
            ...newTodo,
            completed:!newTodo.completed
        }}
  }