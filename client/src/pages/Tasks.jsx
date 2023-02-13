import React, {useEffect} from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {AllTask, Header, Sidebar} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getUserTask} from "../app/service/taskService";

const Tasks = () => {
    const {loading, error, tasks} = useSelector((state) => state.task);

    console.log("Tasks:" , tasks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserTask());
    }, [dispatch]);
    return (
        <Flex gap={3}>
            <Box display={{md: "flex", base: "none"}} width="300px">
                <Sidebar/>
            </Box>
            <Box className="header" marginRight="15px">
                <Header/>
                <AllTask tasks={tasks} taskLoading={loading}/>
            </Box>
        </Flex>
    );
};

export default Tasks;