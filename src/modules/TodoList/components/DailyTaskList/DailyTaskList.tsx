import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography} from "@mui/material";
import TaskItem from "../TaskItem/TaskItem";
import {ReactComponent as ExpendIcon} from "../../../../assets/svg/exptendIcon.svg";
import styles from './dailyTaskList.module.css'
import {IDailyTaskList} from "../../../../store/helpers";

type DailyTaskListProps = {
    dailyTasks: IDailyTaskList;
}

const DailyTaskList: React.FC<DailyTaskListProps> = ({dailyTasks}) => {
    const dateString = dailyTasks.date.toDateString()

    if (dateString == new Date().toDateString()) {
        return (
            <Box className={styles.dailyTaskContainer + ' ' + styles.dividerContainer}>
                {dailyTasks.tasks.map(taskData => {
                    return <TaskItem key={taskData.id} taskData={taskData} />
                })}
            </Box>
        );
    }

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    let dateText = 'Tomorrow';

    if (dateString !== tomorrow.toDateString()) {
        const month = dailyTasks.date.getUTCMonth() + 1;
        dateText = `${dailyTasks.date.getDate()}/${ month < 10 ? '0' + month : month }`
    }

    return (
        <Box ml={'20px'} mr={'20px'} className={styles.container}>
            <Accordion classes={{root: styles.accordion}} className={styles.accordion}>
                <AccordionSummary
                    classes={{root: styles.accordionSummary, content: styles.accordionSummaryContent}}
                    className={styles.accordionSummary}
                    aria-controls="task-content"
                    id="task-header"
                    expandIcon={<ExpendIcon />}
                >
                    <Divider flexItem={true} orientation={'vertical'} className={styles.divider} />
                    <Typography className={styles.date}>{dateText} Tasks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={styles.accordionTasks + ' ' + styles.dividerContainer}>
                        {dailyTasks.tasks.map(taskData => {
                            return <TaskItem key={taskData.id} taskData={taskData} />
                        })}
                    </Box>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export {DailyTaskList};