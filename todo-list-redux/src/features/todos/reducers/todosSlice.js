import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1","2"],
    //ids: initialTodoList.map(item => item.id),
    //entities: initialTodoList,
    entities: {
        1:{
            id:"1",
            text: "Do your homework",
            done: false,
        },
        2:{
            id:"2",
            text: "Wash the dishes",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name:"todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state,{
               id: uuidv4(),
               text: action.payload,
               done: false, 
            });
        },
        ToggleTodo(state, action){
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        DeleteTodo(state, action){
            todosAdapter.removeOne(state,action.payload);
        },
        
    }
})

export const {AddTodo, ToggleTodo, DeleteTodo} = todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectToDoIds, selectById: selectTodoById, selectAll: selectTodos} = todosAdapter.getSelectors(
    (state) => state.todoList
);

export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done))