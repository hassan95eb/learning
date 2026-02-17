import TodoHeader from "./TodoHeader";
import ListTodo from "./ListTodo";
import TodoAdd from "./TodoAdd";
import { TaskProvider } from "../../context/TaskContext";

export default function MainTodo() {
    // const [todoList, setTodoList] = useState({});
    return (
        <>
            <TaskProvider>
                <TodoHeader />
                <TodoAdd />
                <ListTodo />
            </TaskProvider>
        </>
    );
}
