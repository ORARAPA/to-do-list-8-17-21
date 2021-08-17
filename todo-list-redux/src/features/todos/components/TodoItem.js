import React from 'react';
import {selectTodoById} from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import {ToggleTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";


function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleTodo(props.itemId));
    }

    const todoStatus = todo.done ? "done" : "";

    return <div className={`TodoItem-todo ${todoStatus}`} onClick ={handleClick}>{todo.text}</div>
}


export default TodoItem;