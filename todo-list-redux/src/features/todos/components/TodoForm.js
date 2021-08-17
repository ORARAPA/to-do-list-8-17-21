import React from 'react';
import { useState } from "react";
import "../styles/TodoForm.css";
import {AddTodo} from "../reducers/todosSlice";
import {useDispatch} from "react-redux";


function TodoForm(){
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event){
        setText(event.target.value);
        console.log(event.target.value);
    }

    function handleAdd(){
        dispatch(AddTodo(text));
        setText("");
    }

    return (
        <div className = "TodoForm">
            <input type="text" 
                placeholder = "Input a new todo item"
                value = {text}
                onChange = {handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="buttonAdd" onClick={handleAdd}>Add</button>
        </div>
    );
    
}


export default TodoForm;