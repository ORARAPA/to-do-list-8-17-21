import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {initialTodoList} from "../../../common/constants/constants";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    //ids: ["1","2"],
    ids: initialTodoList.map(item => item.id),
    // entities: {
    //     1:{
    //         id:"1",
    //         text: "hello",
    //         done: false,
    //     },
    //     2:{
    //         id:"2",
    //         text: "hello again",
    //         done: false,
    //     },
    // },
    entities: initialTodoList,
});

const todosSlice = createSlice({
    name:"todos",
    initialState: initialState,
    reducers: {}
})

export default todosSlice.reducer;

export const {selectIds: selectToDoIds, selectById: selectTodoById} = todosAdapter.getSelectors(
    (state) => state.todoList
);