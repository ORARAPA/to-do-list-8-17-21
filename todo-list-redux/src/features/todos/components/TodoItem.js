import {DeleteTodo, selectTodoById} from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import {ToggleTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { deleteTodo, updateTodo } from '../../apis/todos';
import 'antd/dist/antd.css';
import {ExclamationCircleOutlined, CheckCircleOutlined} from '@ant-design/icons';



function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const dispatch = useDispatch();

    function handleClick(){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
          dispatch(ToggleTodo(props.itemId))
        })
    }

    function handleClickDelete(event){
        if (window.confirm('Do you want to delete this task?')) {
            deleteTodo(props.itemId).then((response) => {
              dispatch(DeleteTodo(props.itemId))
            });
            console.log('Task deleted.');
          } else {
            console.log('Task NOT deleted.');
          }
        event.stopPropagation();
    }

    const todoStatus = todo.done ? "done" : "";

    return (<div className={`TodoItem-todo ${todoStatus}`} onClick ={handleClick}>
                <span className={`span ${todoStatus}`}>
                  {todoStatus=="done" ? <CheckCircleOutlined/> : <ExclamationCircleOutlined/>}
                </span>
                {todo.text}
                <div className="div-right" onClick={handleClickDelete}>X</div>
            </div> ) 
}


export default TodoItem;