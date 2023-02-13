import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {CiViewList} from "react-icons/ci";
import {GiSandsOfTime} from "react-icons/gi";
import {IoChatboxEllipsesOutline} from "react-icons/io5";
import {MdOutlineTimer} from "react-icons/md";
import {RiAttachment2} from "react-icons/ri";
import NewTask from "../forms/NewTask";
import UsersCard from "./UsersCard";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../app/service/userService";
import {toast} from "react-hot-toast";
import {reset} from "../../app/features/authSlice";
import {Link} from "react-router-dom";

const ProjectDetailsCard = ({project}) => {
    const [developerModal, setDeveloperModal] = useState(false);
    const {loading, error, users} = useSelector((state) => state.user);

    const dispatch = useDispatch();
    // open & close modal
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleModal = (type) => {
        onOpen();
        if (type === "task") {
            setDeveloperModal(false);
        } else {
            setDeveloperModal(true);
        }
    }

    useEffect(() => {
        dispatch(getUsers());

        if (error) {
            toast.error(error);
            dispatch(reset());
        }
    }, [dispatch, error])
    return (
        <Box my={5} bg="blackAlpha.700" p={4} borderRadius="md">
            <Flex justify="space-between">
                <Text>Project Identifier # {project?.projectIdentifier}</Text>
                <Flex gap={3}>
                    <Button onClick={() => handleModal("developer")} colorScheme="teal" size="sm">
                        Assign Developer
                    </Button>
                    <Button  onClick={() => handleModal("task")} colorScheme="green" size="sm">
                        Add Task
                    </Button>
                    <Link to={`/project/update/${project?.projectIdentifier}`}>
                        <Button colorScheme="yellow" size="sm">Update Project</Button>
                    </Link>
                    <Button colorScheme="red" size="sm">
                        Delete Project
                    </Button>
                </Flex>
            </Flex>
            {/* modal  */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>{developerModal ? "Assign Developer" : "Add Task"} 😎</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        {
                            developerModal ?
                                <UsersCard users={users} projectId={project?.projectIdentifier} loading={loading}/> :
                                <NewTask developers={project?.users} projectId={project?.projectIdentifier} onClose={onClose}/>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Flex gap={6} my={5} width="100%">
                {/* image  */}
                <Box width="450px" height="300px" bg="gray" rounded="md"></Box>
                {/* description  */}
                <Box width="100%">
                    <Text fontSize={20}>{project?.projectName}</Text>
                    <Text mt={2} color="gray.300" fontSize="sm">
                        {project?.description}
                    </Text>

                    <Flex gap={4} my={4}>
                        <Badge px={2} py={1}>
                            <Flex alignItems="center" gap={2}>
                                <GiSandsOfTime size={15}/>
                                {project?.start_date}
                            </Flex>
                        </Badge>
                        <Badge px={2} py={1} colorScheme="green">
                            <Flex alignItems="center" gap={2}>
                                <MdOutlineTimer size={15}/>
                                <Text textTransform="uppercase">{project?.end_date}</Text>
                            </Flex>
                        </Badge>
                    </Flex>

                    <Flex gap={3}>
                        <Flex align="center" gap={1}>
                            <RiAttachment2/>
                            Attachment (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <IoChatboxEllipsesOutline color="white"/>
                            Message (20)
                        </Flex>
                        <Flex align="center" gap={1}>
                            <CiViewList/>
                            Task (20)
                        </Flex>
                    </Flex>

                    <Box my={5}>
                        <Text>Assigned Developer</Text>
                        <AvatarGroup size="sm" max={4} mt={2}>
                            {
                                project?.users?.map((user) => (
                                    <Avatar
                                        key={user?.id}
                                        name={user?.name}
                                    />
                                ))
                            }
                        </AvatarGroup>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default ProjectDetailsCard;
