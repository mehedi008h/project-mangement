import React, {Fragment, useState} from 'react';
import {Avatar, Button, Flex, Spinner, Stack, Tag, Text} from "@chakra-ui/react";

const UsersCard = ({users, loading}) => {
    const [developers, setDevelopers] = useState([]);

    const handleAssignDeveloper = (developer) => {
        setDevelopers([...developers, developer]);

    }
    return (
        <Stack spacing={2} my={2}>
            <Flex flexWrap="wrap" gap={2}>
                {developers.map((developer) => (
                    <Tag key={developer?.id}>{developer?.name}</Tag>
                ))}

            </Flex>
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
                                <Button onClick={() => handleAssignDeveloper(user)}>Assign</Button>
                            </Flex>
                        ))
                    }
                </Fragment>
            )}


        </Stack>
    );
};

export default UsersCard;