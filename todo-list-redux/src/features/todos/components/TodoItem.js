import {DeleteTodo, selectTodoById} from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import {ToggleTodo, UpdateTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import { deleteTodo, updateTodo } from '../../apis/todos';
import 'antd/dist/antd.css';
import {ExclamationCircleOutlined, CheckCircleOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react';
import { Modal } from 'antd';



function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const [text,setText] = useState(todo.text);

    function handleClick(event){
        updateTodo(props.itemId, {done: !todo.done}).then((response) => {
          dispatch(ToggleTodo(props.itemId))
        })
        event.stopPropagation();
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

    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal(event) {
      setIsModalVisible(true);
      event.stopPropagation();
    }

    function handleOk(event){
      event.stopPropagation();
      if(text!==""){
        updateTodo(props.itemId, {text: text}).then((response) => {
          dispatch(UpdateTodo(response));
        });
      }else{
        setText(text);
      }
      setIsModalVisible(false);
      
    }

    function handleCancel(event) {
      setText(todo.text);
      setIsModalVisible(false);
    }

    const todoStatus = todo.done ? "done" : "";

    return (<div className="outer-div">
              <div className={`TodoItem-todo ${todoStatus}`} onClick ={handleClick}>
                <span className={`span ${todoStatus}`}>
                  {todoStatus=="done" ? <CheckCircleOutlined/> : <ExclamationCircleOutlined/>}
                </span>
                {text}
                <button className="span-right delete" onClick={handleClickDelete}>
                  <DeleteOutlined />
                </button>
                <button onClick={showModal} className="span-right">
                  {todoStatus=="done" ? null :  <EditOutlined />}
                </button>
              </div>
              <div>
                <Modal title="Edit to do" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                  <TextArea rows={2} value={text} onChange = {(e) => setText(e.target.value)}/>
                </Modal>
              </div>
            </div>
          ) 
}


export default TodoItem;