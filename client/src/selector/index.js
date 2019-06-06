export const searchTodo=(state,keyword)=>
     state.filter(todo=>todo.name.toLowerCase().includes(keyword.toLowerCase()));
    
