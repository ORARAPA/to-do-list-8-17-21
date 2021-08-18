import React from 'react';
import { useState } from "react";
import "../styles/TodoForm.css";
import {AddTodo} from "../reducers/todosSlice";
import {useDispatch} from "react-redux";
import { addTodo } from '../../apis/todos';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import { Input } from 'antd';


function TodoForm(){
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
    }

    function handleAdd(){
        if(text === ""){
            alert('Input todo is blank.')
        }else{
            addTodo(text).then(
                dispatch(AddTodo(text))
            );
            setText("");
        }
    }

    return (
        <div className = "TodoForm">
            <Input placeholder="Input a new todo item" value = {text} onChange = {handleChange}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" shape="round" onClick={handleAdd}>Add</Button>
        </div>
    );
    
}


export default TodoForm;