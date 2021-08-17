import TodoItem from "./TodoItem";
import React from 'react';
import{initialTodoList} from "../../../common/constants/constants"
import{getAllTodoIds} from "../../../common/utils/utils"

function TodoGroup(){
    return (
        <div>
            {
                getAllTodoIds(initialTodoList).map((id) => (
                    <TodoItem key={id} itemId={id} />
                    
                ))
            }
        </div>
        )
}


export default TodoGroup;