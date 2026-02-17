import { useReducer } from "react";
import { createContext } from "react";

export const TaskContext = createContext();
function taskManagementReducer(state, action) {
    switch (action.type) {
        case "addTask":
            return [...state, action.payload];
        default:
            return state;
    }
}
export function TaskProvider({ children }) {
    const [tasks, dispatch] = useReducer(
        taskManagementReducer,
        [],
    );
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
