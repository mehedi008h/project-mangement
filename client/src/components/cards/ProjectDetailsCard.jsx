import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Button,
    Flex,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { CiViewList } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
import { RiAttachment2 } from "react-icons/ri";

const ProjectDetailsCard = () => {
    return (
        <Box my={5} bg="blackAlpha.700" p={4} borderRadius="md">
            <Flex justify="space-between">
                <Text>Project Details card</Text>
                <Flex gap={3}>
                    <Button colorScheme="green" size="sm">
                        Add Task
                    </Button>
                    <Button colorScheme="yellow" size="sm">
                        Update Project
                    </Button>
                    <Button colorScheme="red" size="sm">
                        Delete Project
                    </Button>
                </Flex>
            </Flex>
            <Flex gap={6} my={5} width="100%">
                {/* image  */}
                <Box width="450px" height="300px" bg="gray" rounded="md"></Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>Project Title</Text>
                    <Text mt={2} color="gray.300" fontSize="sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto corrupti repudiandae sed tempora quibusdam
                        necessitatibus vel illo facilis maiores adipisci velit
                        excepturi fugiat nulla ipsam vero, est aperiam sapiente
                        dignissimos.
                    </Text>

                    <Flex gap={4} my={4}>
                        <Badge px={2} py={1}>
                            <Flex alignItems="center" gap={2}>
                                <GiSandsOfTime size={15} />
                                34:40
                            </Flex>
                        </Badge>
                        <Badge px={2} py={1} colorScheme="green">
                            <Flex alignItems="center" gap={2}>
                                <MdOutlineTimer size={15} />
                                <Text textTransform="uppercase">Today</Text>
                            </Flex>
                        </Badge>
                    </Flex>

                    <Flex gap={3}>
                        <Flex align="center" gap={1}>
                            <RiAttachment2 />
                            Attachment (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <IoChatboxEllipsesOutline color="white" />
                            Message (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <CiViewList />
                            Task (20)
                        </Flex>
                    </Flex>

                    <Box my={5}>
                        <Text>Assigned Developer</Text>

                        <AvatarGroup size="sm" max={4} mt={2}>
                            <Avatar
                                name="Ryan Florence"
                                src="https://bit.ly/ryan-florence"
                            />
                            <Avatar
                                name="Segun Adebayo"
                                src="https://bit.ly/sage-adebayo"
                            />
                            <Avatar
                                name="Kent Dodds"
                                src="https://bit.ly/kent-c-dodds"
                            />
                            <Avatar
                                name="Prosper Otemuyiwa"
                                src="https://bit.ly/prosper-baba"
                            />
                            <Avatar
                                name="Christian Nwamba"
                                src="https://bit.ly/code-beast"
                            />
                        </AvatarGroup>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsCard;
