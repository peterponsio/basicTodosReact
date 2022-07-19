import React, { Fragment, useState, useRef,useEffect } from "react";
import { v4 as uuid }  from 'uuid' 
import { TodoList } from "./components/TodoList";


export function App() {     

    const taskRef = useRef();

    const [todos, setTodos] = useState([
        {id:1,task:"tarea 1",completed:false}
    ]);

    useEffect(() => {
        const localTodos = localStorage.getItem('todos',JSON.parse(todos))
        setTodos(localTodos || [])
    }, [])

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
    const addTask = () =>{
        let taskName = taskRef.current.value;
        console.log("taskRef",taskRef.current.value);
        if(taskRef.current.value == "") return;

        setTodos(prevValue=>{
            return [...prevValue,{ id: uuid(),task:taskName,completed:false }]
        })
        taskRef.current.value = ""; 
    };

    const clearTask = () => {
        let todosClear = [...todos];
        todosClear = todosClear.filter(res=> !res.completed);
        setTodos(todosClear);
    }

    const toggleCompleted = (id) =>{
        const newTodos = [...todos];
        console.log("lista", id);
        const todo = newTodos.find(res=> res.id == id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    return(
        <Fragment>
            <TodoList list={todos} toggleCompleted={toggleCompleted} />
            <input ref={taskRef} type="text" placeholder="tarea" />
            <button onClick={addTask}>add</button>
            <button onClick={clearTask}>delete</button>
            <div>
                lista tareas por hacer {todos.filter(res=> !res.completed).length}
            </div>
        </Fragment>
    )
}