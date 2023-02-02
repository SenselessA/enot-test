import React, {useContext} from 'react';
import {Box, Checkbox, FormControlLabel} from "@mui/material";
import styles from './todoTaskList.module.css'
import {ReactComponent as CheckedIcon} from "../../../../assets/svg/checkedIcon.svg";
import {DailyTaskList} from "../DailyTaskList/DailyTaskList";
import {todoListContext} from "../../../../store/TodoProvider";

const TodoTaskList = () => {
    const [todos] = useContext(todoListContext)
    return (
        <div>
            <Box mb={'6px'} ml={'38px'} mr={'38px'}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                color: '#F4F4F4',
                                '&.Mui-checked': {
                                    color: '#F4F4F4',
                                },
                            }}
                            checkedIcon={<CheckedIcon />}
                            checked={true}
                            classes={{root: styles.checkbox}}
                        />
                    }
                    label="Today Tasks:"
                />
            </Box>

            <Box display={'flex'} flexDirection={'column'} rowGap={'32px'}>
                {todos.map((dailyTasks) => {
                    return <DailyTaskList key={dailyTasks.date.toDateString()} dailyTasks={dailyTasks} />
                })}
            </Box>
        </div>
    );
};

export {TodoTaskList};