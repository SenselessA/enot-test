import React, {useCallback, useContext} from 'react';
import {Box, Divider, Typography} from "@mui/material";
import styles from './taskItem.module.css'
import {Switch} from "../../../ui/Switch/Switch";
import {ITask} from "../../../../store/helpers";
import {todoListContext} from "../../../../store/TodoProvider";

type TaskItemProps = {
    taskData: ITask
}

const TaskItem: React.FC<TaskItemProps> = ({taskData}) => {
    const [_, todoDoneHandler] = useContext(todoListContext);
    const onDone = useCallback(() => todoDoneHandler(taskData.id), [todoDoneHandler, taskData])
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box display={'flex'} columnGap={'11px'}>
                <Divider orientation="vertical" flexItem className={styles.divider + ' divider'} />
                <Box>
                    <Typography  classes={{root: `${styles.title} ${taskData.isDone && styles.done}`}}>{taskData.title}</Typography>
                    <Typography classes={{root: styles.description}}>{taskData.description}</Typography>
                </Box>
            </Box>

            <Switch checked={taskData.isDone} onChange={onDone} />
        </Box>
    );
};

export default TaskItem;