import React from 'react';
import { useState } from "react";
import "../styles/TodoForm.css";
import {AddTodo} from "../reducers/todosSlice";
import {useDispatch} from "react-redux";
import { addTodo } from '../../apis/todos';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';


function TodoForm(){
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    function handleAdd(){
        if(text === ""){
            alert('Input todo is blank.')
        }else{
            addTodo(text).then((response) =>
                dispatch(AddTodo(response.data))
            );
            setText("");
        }
    }

    const { Search } = Input;

    return (
        <div className = "TodoForm">
            <Search
                placeholder="Input a new todo item"
                enterButton="Add"
                size="medium"
                onChange = {(e) => setText(e.target.value)}
                onSearch={handleAdd}
                value={text}
                style={{ width: 700 }}
            />
        </div>
    );
    
}


export default TodoForm;