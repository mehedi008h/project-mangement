import React, {Fragment} from 'react';
import {Box, Flex, Spinner, Stack, Text} from "@chakra-ui/react";
import {TableContent, TaskHeader} from "../index";

const AllTask = ({tasks, taskLoading}) => {
    return (
        <Stack spacing={5} my={5}>
            {/*to_do */}
            <Box bg="blackAlpha.600" rounded={"md"} py={4}>
                <Flex justifyContent="space-between" alignItems="center" px={4}>
                    <Text fontWeight="semibold" fontSize={18}>TO_DO Task</Text>
                    {
                        taskLoading && <Spinner/>
                    }
                </Flex>
                <TaskHeader/>
                {
                    taskLoading ? <Spinner color='red.500'/> : (
                        <Fragment>
                            {
                                tasks?.filter((task) => {
                                    return task.status === "TO_DO"
                                }).map((task) => (
                                    <TableContent developer key={task?.id} task={task}/>
                                ))
                            }
                        </Fragment>
                    )
                }
            </Box>

            {/*progress */}
            <Box bg="blackAlpha.600" rounded={"md"} py={4}>
                <Flex justifyContent="space-between" alignItems="center" px={4}>
                    <Text fontWeight="semibold" fontSize={18}>PROGRESS Task</Text>
                    {
                        taskLoading && <Spinner color='yellow.500'/>
                    }
                </Flex>
                <TaskHeader/>
                {
                    taskLoading ? <Spinner/> : (
                        <Fragment>
                            {
                                tasks?.filter((task) => {
                                    return task.status === "PROGRESS"
                                }).map((task) => (
                                    <TableContent developer key={task?.id} task={task}/>
                                ))
                            }
                        </Fragment>
                    )
                }
            </Box>

            {/*progress */}
            <Box bg="blackAlpha.600" rounded={"md"} py={4}>
                <Flex justifyContent="space-between" alignItems="center" px={4}>
                    <Text fontWeight="semibold" fontSize={18}>COMPLETED Task</Text>
                    {
                        taskLoading && <Spinner color='green.500'/>
                    }
                </Flex>
                <TaskHeader/>
                {
                    taskLoading ? <Spinner/> : (
                        <Fragment>
                            {
                                tasks?.filter((task) => {
                                    return task.status === "COMPLETED"
                                }).map((task) => (
                                    <TableContent key={task?.id} task={task}/>
                                ))
                            }
                        </Fragment>
                    )
                }
            </Box>
        </Stack>
    );
};

export default AllTask;