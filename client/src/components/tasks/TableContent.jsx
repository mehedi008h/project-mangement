import React from "react";
import {
    Badge, Box,
    Flex,
    Grid,
    GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
    Text, useDisclosure,
} from "@chakra-ui/react";
import {
    IoChatboxEllipsesOutline,
    IoCheckmarkDoneCircleSharp,
} from "react-icons/io5";
import {IoIosArrowForward} from "react-icons/io";
import {MdOutlineNextPlan, MdOutlineTimer} from "react-icons/md";
import {GiSandsOfTime} from "react-icons/gi";
import moment from "moment";
import {TaskDetails} from "../index";
import {useDispatch} from "react-redux";
import {updateTaskStatus} from "../../app/service/taskService";

const TableContent = ({task, developer}) => {
    // open & close modal
    const {isOpen, onOpen, onClose} = useDisclosure();
    const dispatch = useDispatch();

    // calculate days
    let a = moment(task?.dueDate);
    let b = moment(task?.createdAt);
    let remaining = a.diff(b, 'days');

    const {projectSequence} = task;

    const handleStatus = () => {
        let status;
        if (task?.status === "TO_DO") {
            status = 2;
        } else {
            status = 3;
        }
        dispatch(updateTaskStatus({status, projectSequence}))
    }

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
                                        <TaskDetails email={task?.assignBy} task={task}/>
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
                px={3}
            >
                <Flex w="100%" justifyContent="space-between" alignItems="center">
                    <Badge px={4} py={1} colorScheme={task?.status === "PROGRESS" ? "yellow"
                        : task?.status === "COMPLETED" ? "green" : "red"}>{task?.status}</Badge>
                    {
                        developer && <Box _hover={{color: "green"}} cursor="pointer">
                            <MdOutlineNextPlan onClick={handleStatus} size={18}/>
                        </Box>
                    }

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
