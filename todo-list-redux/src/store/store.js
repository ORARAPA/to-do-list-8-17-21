import {configureStore} from '@reduxjs/toolkit';
import todosReducer from "../features/todos/reducers/todosSlice";

const store = configureStore({
    reducer: { //how to change the state
        todoList: todosReducer
    }, 
});

export default store;