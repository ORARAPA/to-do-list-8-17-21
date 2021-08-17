import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {initialTodoList} from "../../../common/constants/constants";
import { v4 as uuidv4 } from 'uuid';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1","2"],
    //ids: initialTodoList.map(item => item.id),
    //entities: initialTodoList,
    entities: {
        1:{
            id:"1",
            text: "hello",
            done: false,
        },
        2:{
            id:"2",
            text: "hello again",
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
        }
    }
})

export const {AddTodo} = todosSlice.actions;

export default todosSlice.reducer;

export const {selectIds: selectToDoIds, selectById: selectTodoById} = todosAdapter.getSelectors(
    (state) => state.todoList
);