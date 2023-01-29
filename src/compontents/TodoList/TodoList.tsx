import React from 'react';
import {Box} from "@mui/material";
import {TodoHeader} from "./components/TodoHeader/TodoHeader";
import {TodoTaskList} from "./components/TodoTaskList/TodoTaskList";
import styles from './todoList.module.css'
import TodoListProvider from "../../store/TodoProvider";
import NewsLine from "../NewsLine/NewsLine";

const TodoList = () => {
    return (
            <Box className={styles.container}>
                <Box className={styles.head}>
                    <TodoHeader />
                    <TodoListProvider>
                        <TodoTaskList />
                    </TodoListProvider>
                </Box>
                    <NewsLine />
            </Box>
    );
};

export {TodoList};