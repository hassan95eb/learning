import { useContext } from "react";
import { useReducer } from "react";
import { TaskContext } from "../../context/TaskContext";

const initialState = {
    title: "",
    date: "",
    time: "",
};

function addTodoReducer(state, action) {
    switch (action.type) {
        case "update_field":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "reset":
            return initialState;

        default:
            return state;
    }
}
export default function TodoAdd() {
    const [task, dispatch] = useReducer(
        addTodoReducer,
        initialState,
    );

    const handleChangeInput = (e, fieldName) => {
        dispatch({
            type: "update_field",
            field: fieldName,
            value: e.target.value,
        });
    };
    const { dispatch: globalDispatch } =
        useContext(TaskContext);

    const handleAddTask = () => {
        const newTask = { ...task, id: new Date() };
        globalDispatch({
            type: "addTask",
            payload: newTask,
        });
        dispatch({ type: "reset" });
    };
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center  p-6 bg-linear-to-r from-blue-50 to-indigo-100  shadow-lg">
            <div className="w-full sm:w-auto">
                <input
                    type="text"
                    className="w-full sm:w-64 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter task title"
                    value={task.title}
                    onChange={(e) =>
                        handleChangeInput(e, "title")
                    }
                />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
                <div className="flex-1 sm:flex-none">
                    <input
                        type="date"
                        className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 text-sm"
                        value={task.date}
                        onChange={(e) => {
                            handleChangeInput(e, "date");
                        }}
                    />
                </div>
                <div className="flex-1 sm:flex-none">
                    <input
                        type="time"
                        className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 text-sm"
                        value={task.time}
                        onChange={(e) => {
                            handleChangeInput(e, "time");
                        }}
                    />
                </div>
            </div>
            <div className="w-full sm:w-auto">
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}
