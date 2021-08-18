import React from 'react'
import { useSelector } from "react-redux";
import {selectDoneList} from "../reducers/todosSlice";
import TodoItem from "./TodoItem";

function DoneList() {
    const doneItems = useSelector(selectDoneList);
    return (
        <div>
            <h1>Done List:</h1>
            {
                doneItems.map((item) => (
                    <TodoItem key={item.id} itemId={item.id} />
                ))
            }
        </div>
        )
}

export default DoneList;
