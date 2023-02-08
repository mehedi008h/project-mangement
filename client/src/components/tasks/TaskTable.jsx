import {Box, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect} from "react";
import TableContent from "./TableContent";
import {useDispatch, useSelector} from "react-redux";
import {getProjectTask} from "../../app/service/taskService";
import {toast} from "react-hot-toast";

const TaskTable = ({projectId, projectLoading}) => {
    const {loading, error, tasks} = useSelector((state) => state.task);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!projectLoading) {
            dispatch(getProjectTask({projectId}));
        }

        if (error) {
            toast.error(error);
        }
    }, [dispatch,error,projectLoading, projectId])
    return (
        <Box mt={2} bg="blackAlpha.700" rounded="md">
            {
                loading ? (
                    <Text>Loading</Text>
                ) : (
                    <Fragment>
                        {
                            tasks && tasks?.map((task) => (
                                <TableContent key={task?.id} task={task}/>
                            ))
                        }
                    </Fragment>
                )
            }
        </Box>
    );
};

export default TaskTable;
