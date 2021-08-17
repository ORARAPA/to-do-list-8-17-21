import TodoItem from "./TodoItem";
import React from 'react';
import {selectToDoIds} from "../reducers/todosSlice";
import { useSelector } from "react-redux";

function TodoGroup(){
    const todoIds = useSelector(selectToDoIds);
    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id} />
                ))
            }
        </div>
        )
}


export default TodoGroup;