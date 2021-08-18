import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    //ids: initialTodoList.map(item => item.id),
    //entities: initialTodoList,
    ids: ["1","2"],
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
            todosAdapter.removeOne(state,action);
        },
        AddTodos(state,action){
            todosAdapter.addMany(state,action);
        }
        
    }
})

export const {AddTodo, ToggleTodo, DeleteTodo, AddTodos} = todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectToDoIds, selectById: selectTodoById, selectAll: selectTodos} = todosAdapter.getSelectors(
    (state) => state.todoList
);

export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo) => todo.done))