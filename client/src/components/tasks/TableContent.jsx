import React from "react";
import {
    Badge,
    Flex,
    Grid,
    GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Stack,
    Text, useDisclosure,
} from "@chakra-ui/react";
import {
    IoChatboxEllipsesOutline,
    IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import {IoIosArrowForward} from "react-icons/io";
import {MdOutlineTimer} from "react-icons/md";
import {GiSandsOfTime} from "react-icons/gi";
import moment from "moment";
import {TaskDetails} from "../index";

const TableContent = ({task}) => {
    // open & close modal
    const {isOpen, onOpen, onClose} = useDisclosure();
    // calculate days
    let a = moment(task?.dueDate);
    let b = moment(task?.createdAt);
    let remaining = a.diff(b, 'days');

    return (
        <Grid
            templateColumns="repeat(7, 1fr)"
            gap={2}
            borderBottom="1px"
            borderColor="gray.800"
        >
            <GridItem
                colSpan={3}
                w="100%"
                h="10"
                borderRight="4px"
                borderColor={task?.priority === 1 ? "yellow.300" : task?.priority === 2 ? "blue.300" : "green.300"}
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Flex
                    width="100%"
                    gap={2}
                    justify="space-between"
                    alignItems="center"
                >
                    <Flex gap={2} alignItems="center">
                        <Text>{task?.projectSequence}</Text>
                        <IoCheckmarkDoneCircleSharp size={16} color="green"/>
                        <Text>{task?.name}</Text>
                    </Flex>
                    <Flex pr={4} gap="3">
                        <Flex gap={1} alignItems="center">
                            <IoChatboxEllipsesOutline size={16} color="green"/>{" "}
                            <Text>20</Text>
                        </Flex>
                        <Flex
                            gap={1}
                            alignItems="center"
                            cursor="pointer"
                            _hover={{color: "yellow"}}
                        >
                            <Text onClick={onOpen} cursor="pointer">Details</Text>
                            {/*task details modal */}
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay/>
                                <ModalContent>
                                    <ModalHeader>Task Details</ModalHeader>
                                    <ModalCloseButton/>
                                    <ModalBody>
                                        <TaskDetails ptSequence={task?.projectSequence}/>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            <IoIosArrowForward size={16} color="yellow"/>{" "}
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Stack direction="row">
                    <Badge px={4} py={1} colorScheme="red">{task?.status}</Badge>
                </Stack>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={4} py={1}>
                    <Flex alignItems="center" gap={2}>
                        <GiSandsOfTime size={15}/>
                        {remaining} days
                    </Flex>
                </Badge>
            </GridItem>
            <GridItem
                w="100%"
                borderRight="1px"
                borderColor="gray.800"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
                fontSize={14}
            >
                <Badge px={2} py={1} colorScheme="green">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15}/>
                        <Text textTransform="uppercase">{task?.createdAt}</Text>
                    </Flex>
                </Badge>
            </GridItem>
            <GridItem
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent="start"
                pl={3}
            >
                <Badge px={2} py={1} colorScheme="red">
                    <Flex alignItems="center" gap={2}>
                        <MdOutlineTimer size={15}/>
                        <Text textTransform="uppercase">{task?.dueDate}</Text>
                    </Flex>
                </Badge>
            </GridItem>
        </Grid>
    );
};

export default TableContent;
