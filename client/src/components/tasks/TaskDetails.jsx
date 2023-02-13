import React, {useEffect} from 'react';
import {Avatar, Box, Divider, Flex, Select, Stack, Text} from "@chakra-ui/react";
import {GiSandsOfTime} from "react-icons/gi";
import {MdOutlineTimer} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment/moment";
import {FcHighPriority, FcLowPriority, FcMediumPriority} from "react-icons/fc";
import {SiStatuspage} from "react-icons/si";
import {getUserDetails} from "../../app/service/userService";

const TaskDetails = ({email, task}) => {
    const {user, loading} = useSelector((state) => state.user);

    const dispatch = useDispatch();

    // calculate days
    let a = moment(task?.dueDate);
    let b = moment(task?.createdAt);
    let remaining = a.diff(b, 'days');

    useEffect(() => {
        if (task) {
            dispatch(getUserDetails({email}));
        }
    }, [task, dispatch, email])
    return (
        <Box>
            <Flex justifyContent="space-between" alignItems="center">
                <Text>Task ID : {task?.projectSequence}</Text>
                {/*<Select*/}
                {/*    bg='gray'*/}
                {/*    width="-moz-fit-content"*/}
                {/*    size="sm"*/}
                {/*    borderColor="gray"*/}
                {/*    color='white'*/}
                {/*    placeholder='Status'*/}
                {/*    value={task?.status}*/}
                {/*>*/}
                {/*    <option value='TO_DO'>TO_DO</option>*/}
                {/*    <option value='PROCESSING'>PROCESSING</option>*/}
                {/*    <option value='COMPLETED'>COMPLETED</option>*/}
                {/*</Select>*/}
            </Flex>

            <Stack spacing={2}>
                <Text mt={3} fontSize={18} fontWeight="semibold" color="teal.400">{task?.name}</Text>
                <Text fontSize={14} color="gray.300">{task?.summary}</Text>
                {/*remaining days */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15}/>
                        <Text>Remaining days :</Text>
                    </Flex>
                    <Text>{remaining} days</Text>
                </Flex>
                {/*assign date */}
                <Flex color="green.500" justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15}/>
                        <Text>Assign Date :</Text>
                    </Flex>
                    <Text>{task?.createdAt}</Text>
                </Flex>
                {/*due date */}
                <Flex color="red.500" justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15}/>
                        <Text>Due Date :</Text>
                    </Flex>
                    <Text>{task?.dueDate}</Text>
                </Flex>
                {/*priority */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        {task?.priority === 1 ? <FcHighPriority size={15}/> : task?.priority === 2 ?
                            <FcMediumPriority size={15}/> : <FcLowPriority size={15}/>}
                        <Text>Task Priority :</Text>
                    </Flex>
                    <Text>{task?.priority === 1 ? "HIGH" : task?.priority === 2 ? "MEDIUM" : "LOW"}</Text>
                </Flex>
                {/*status */}
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={2}>
                        <SiStatuspage color="white" size={15}/>
                        <Text>Task Status :</Text>
                    </Flex>
                    <Text>{task?.status}</Text>
                </Flex>
            </Stack>
            <Divider my={2}/>
            <Text>Assigned By</Text>
            {
                loading ? "" : (
                    <Flex alignItems="center" gap={3} my={2}>
                        <Avatar name={user?.name}/>
                        <Box>
                            <Text>{user?.name}</Text>
                            <Text fontSize={14}>Software Engineer</Text>
                        </Box>
                    </Flex>
                )
            }

        </Box>
    );
};

export default TaskDetails;