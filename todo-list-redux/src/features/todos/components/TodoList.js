import React from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/TodoList.css";
import { AddTodos, selectToDoIds } from '../reducers/todosSlice';
import {useEffect} from "react";
import { getTodos } from '../../apis/todos';
import { useDispatch, useSelector } from "react-redux";


function TodoList(){
    const todoIds = useSelector(selectToDoIds)
    const dispatch = useDispatch();

    useEffect(() => {
        getTodos().then((response) => {
            dispatch(AddTodos(response.data));
        });
    }, []);

    return (
        <div>
            <h1>To do List:</h1>
            <TodoForm />
            <TodoGroup />
        </div>
    )
}


export default TodoList;