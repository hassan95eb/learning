import React from "react";
import TodoHeader from "./TodoHeader";
import ListTodo from "./ListTodo";
import TodoAdd from "./TodoAdd";

export default function MainTodo() {
    // const [todoList, setTodoList] = useState({});
    return (
        <>
            <TodoHeader />
            <TodoAdd />
            <ListTodo />
        </>
    );
}
