import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function ListTodo() {
    const { tasks } = useContext(TaskContext);
    return (
        <ul>
            {tasks.map((t) => {
                return <li key={t.id}>{t.title}</li>;
            })}
        </ul>
    );
}
