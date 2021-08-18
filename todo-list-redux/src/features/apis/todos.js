import api from "./index";

export const getTodos = () => {
    return api.get("/todos");
}


export const addTodo = (text) => {
    return api.post("/todos",{text})
}


export const deleteTodo = (id) => {
    return api.delete(`/todos/${id}`)
}

export const updateTodo = (id,updateTodo) => {
    return api.put(`/todos/${id}`,updateTodo)
}