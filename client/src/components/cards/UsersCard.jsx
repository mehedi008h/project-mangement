import React, {Fragment, useEffect} from 'react';
import {Avatar, Button, Flex, Spinner, Stack,  Text} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {assignDeveloper} from "../../app/service/projectService";
import {reset} from "../../app/features/projectSlice";
import {toast} from "react-hot-toast";

const UsersCard = ({users, projectId, loading}) => {
    const dispatch = useDispatch();

    const handleAssignDeveloper = (userEmail) => {
        dispatch(assignDeveloper({projectId, userEmail}));
    }

    return (
        <Stack spacing={2} my={2}>

            {loading ? <Spinner/> : (
                <Fragment>
                    {
                        users?.map((user) => (
                            <Flex key={user?.id} justifyContent="space-between" alignItems="center" px={2} py={2}
                                  rounded="md"
                                  _hover={{bg: "blackAlpha.400"}}>
                                <Flex alignItems="center" gap={2}>
                                    <Avatar name={user?.name}/>
                                    <Text>{user?.name}</Text>
                                </Flex>
                                <Button
                                        onClick={() => handleAssignDeveloper(user?.email)}>Assign</Button>
                            </Flex>
                        ))
                    }
                </Fragment>
            )}


        </Stack>
    );
};

export default UsersCard;