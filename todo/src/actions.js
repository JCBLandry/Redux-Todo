export const NEWTODO = 'NEWTODO';
export const TOGGLEDONE = 'TOGGLEDONE';
export const DELETETODO = 'DELETETODO';

export const newtodo = newTodo => {
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