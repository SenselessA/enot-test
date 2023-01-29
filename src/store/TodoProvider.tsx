import React, {createContext, useCallback, useState} from 'react';
import {IDailyTaskList, taskListData} from "./helpers";

type TodoListContextProps = [
    todos: IDailyTaskList[],
    setTodos: (id: string | number) => void
];

export const todoListContext = createContext<TodoListContextProps>([taskListData, () => {}]);

type UserDetailsProviderProps = {
    children?: React.ReactNode
};

const TodoListProvider:React.FC<UserDetailsProviderProps> = ({children}) => {
    const [todos, setTodos] = useState(taskListData);

    const todoDoneHandler = useCallback((taskId: string | number) => {
        setTodos(prevState => {
            return prevState.map(todo => {
                return {
                    date: todo.date,
                    tasks: todo.tasks.map(task => {
                            if (task.id === taskId) {
                                return {
                                    ...task,
                                    isDone: !task.isDone
                                }
                            } else {
                                return task;
                            }
                        }
                    )
                }
            })
        })
    }, [setTodos])

    return (
    <todoListContext.Provider value={[todos, todoDoneHandler]}>
        {children}
    </todoListContext.Provider>
);
};

export default TodoListProvider;