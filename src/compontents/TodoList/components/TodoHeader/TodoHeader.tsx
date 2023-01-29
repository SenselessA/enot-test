import React, {useContext} from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import {ReactComponent as SettingIcon} from '../../../../assets/svg/settingIcon.svg';
import {newsLineContext} from "../../../../store/NewsLineProvider";

const TodoHeader = () => {
    const [isHide, setHide] = useContext(newsLineContext);
    return (
        <Box mb={'20px'}>
            <Box display={'flex'} justifyContent={'space-between'}  ml={'38px'} mr={'38px'}>
                <Typography fontWeight={400} variant={'h1'} fontSize={'36px'} color={'#F4F4F4'}>To Do</Typography>
                <IconButton onClick={() => setHide(!isHide)}>
                    <SettingIcon opacity={isHide ? '0.7' : '1'} />
                </IconButton>
            </Box>
        </Box>
    );
};

export {TodoHeader};